import React from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import "./Random.css";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    };
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          recipe: data.meals[0],
        });
      });
  };

  render() {
    const { recipe } = this.state;
    //const arrayMeals = Object.values(meals).map((x) => <p>{x}</p>);

    return (
      <div className="Random">
        <h1 className>Random</h1>
        <div className>
          <RecipeCard recipe={recipe} />
        </div>

        <button className="ButtonRecipe" type="button" onClick={this.getRecipe}>
          Gimme another recipe !
        </button>
      </div>
    );
  }
}

export default Random;