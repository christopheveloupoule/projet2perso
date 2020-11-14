import React, { useEffect, useState } from "react";
import "./recipeCard.css";
import { Link } from "react-router-dom";
import favorite from "../icons/favorite.svg";
import notFavorite from "../icons/not-favorite.svg";
import tested from "../icons/tested.svg";

function RecipeCard({ recipe }) {
  const id = recipe.idMeal;
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(id)) {
      setFavorite(true);
    }
  }, []);

  function addFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(id)) {
      const indexOfId = favorites.indexOf(id);
      favorites.splice(indexOfId, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavorite(false);
    } else {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavorite(true);
    }
  }

  return (
    <div className="Recipe-card">
      <img src={tested} alt="tested-and-approved-icon" className="icon" />
      <button className="button-favorite" type="button" onClick={addFavorites}>
        <img
          src={isFavorite ? favorite : notFavorite}
          alt="like-icon"
          className="icon"
        />
      </button>
      <Link to={`/recette/${recipe.idMeal}`}>
        <img src={recipe.strMealThumb} alt={recipe.strCategory} />
        <h2 className="recipe-card-title">{recipe.strMeal}</h2>
      </Link>
    </div>
  );
}

export default RecipeCard;
