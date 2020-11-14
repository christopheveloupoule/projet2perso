import React from "react";
import axios from "axios";
import RecipeList from "./RecipeList";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    const { searchBar } = this.state;
    console.log(searchBar);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBar}`)
      .then((res) => {
        const filteredrecipes = res.data.meals;
        this.setState({ recipes: filteredrecipes });
      });
  };

  render() {
    const { searchBar } = this.state;
    const { recipes } = this.state;
    return (
      <div className="App">
        <input
          name="searchBar"
          type="text"
          value={searchBar}
          onChange={this.onInputChange}
        />
        <button type="button" onClick={this.handleClick}>
          Find me food !
        </button>
        <RecipeList recipeList={recipes} />
      </div>
    );
  }
}

export default SearchBar;
