import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

function MoodRecipesPage({ categories, areas, title }) {
  let allCategories = [];
  let allAreas = [];

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    allCategories = categories
      ? categories.map((cat) =>
          axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
            .then((res) => res.data.meals)
        )
      : [];

    allAreas = areas
      ? areas.map((ar) =>
          axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ar}`)
            .then((res) => res.data.meals)
        )
      : [];

    const allRecipes = allCategories.concat(allAreas);
    Promise.all(allRecipes).then((r) => setRecipes(r.flat()));
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <div className="recipes-display">
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </>
  );
}

export default MoodRecipesPage;
