import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipeList }) {
  return (
    <div>
      {recipeList
        ? recipeList.map((filteredrecipes) => (
          <RecipeCard recipe={filteredrecipes} />
          ))
        : "Sorry, no recipes, no meal, nobody, never..."}
    </div>
  );
}
export default RecipeList;
