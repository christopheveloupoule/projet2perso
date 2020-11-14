import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

function getFavorites() {
  const favoritesStr = localStorage.getItem("favorites");
  return JSON.parse(favoritesStr || "[]");
}

function FavoritesPage() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const promises = getFavorites().map((recipeId) =>
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((res) => res.data.meals)
    );

    Promise.all(promises).then((res) => {
      setFavoriteRecipes(res.flat());
    });
  }, []);

  return (
    <>
      <h1>My favorite recipes</h1>
      <div className="recipes-display">
        {favoriteRecipes.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </>
  );
}

export default FavoritesPage;
