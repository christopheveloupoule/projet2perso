import React from "react";
import { useParams } from "react-router-dom";

function RecipePage(props) {
  const { recipes } = props;
  const { recipeId } = useParams();
  const recipeFiltered = recipes.filter(
    (recipesInfo) => recipesInfo.idMeal === recipeId
  );
  const displayRecipe = recipeFiltered[0];
  const arrayIngredient = [];
  for (let i = 1; i <= 20; i += 1) {
    if (
      displayRecipe[`strIngredient${i}`] !== "" &&
      displayRecipe[`strIngredient${i}`] !== null &&
      displayRecipe[`strIngredient${i}`] !== " "
    ) {
      arrayIngredient.push(displayRecipe[`strIngredient${i}`]);
    }
  }
  const arrayMeasure = [];
  for (let j = 1; j <= 20; j += 1) {
    if (
      displayRecipe[`strMeasure${j}`] !== "" &&
      displayRecipe[`strMeasure${j}`] !== null &&
      displayRecipe[`strMeasure${j}`] !== " "
    ) {
      arrayMeasure.push(displayRecipe[`strMeasure${j}`]);
    }
  }
  return (
    <div>
      <h1>{displayRecipe.strMeal}</h1>
      <img src={displayRecipe.strMealThumb} alt="meal" />
      <h1>Ingrédients</h1>
      <div>
        {arrayIngredient.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <div>
        {arrayMeasure.map((item) => (
          <li>{item}</li>
        ))}
      </div>
      <h1>Description</h1>
      <div>{displayRecipe.strInstructions}</div>
    </div>
  );
}

export default RecipePage;
