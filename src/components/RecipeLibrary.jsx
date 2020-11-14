import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeLibrary({ recipes }) {
  const recipe = recipes.map((item) => {
    return <RecipeCard recipe={item} />;
  });
  return (
    <>
      <h1>Bibliothèque des recettes</h1>
      <div className="recipes-display">{recipe}</div>
    </>
  );
}

export default RecipeLibrary;
