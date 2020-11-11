import React from "react";
import axios from "axios";


class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [1,2]
    };
    
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe = () => {
     axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.data)
      .then(data => {
        console.log(data)
        // this.setState({
        //   meals: response.data.meals
        // });
      });
  }

  render() {
    const {meals} = this.state
    const arrayMeals = meals.map(x => <p>{x}</p>);
    return (
      <div className="Random">
        <div className="">
          <div>{arrayMeals}</div>    
          <button
            className="ButtonRecipe"
            type="button"                     
            onClick={this.getRecipe}
          >
            Random Recipe
          </button>
        </div>
      </div>
    );
  }
}

export default Random;
