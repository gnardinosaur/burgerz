import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    allBurgers: [],
    shownBurger: {},
    burgerFilter: "All"
  }

  componentDidMount() {
    fetch("http://localhost:3001/burgers")
      .then(resp => resp.json())
      .then(burgers => this.setState({ allBurgers: burgers }))
  }

  showBurger = (burgerObj) => {
    this.setState({ shownBurger: burgerObj })
  }

  handleFilterChange = (e) => {
    this.setState({ burgerFilter: e.target.value });
  }

  persistCatChange = (e, id) => {
    fetch(`http://localhost:3001/burgers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ category: e.target.value })
    })
      .then(resp => resp.json())
      .then(burger => this.updateStateAfterCatChange(burger))
  }

  updateStateAfterCatChange = (burgerObj) => {
    let newArr = [...this.state.allBurgers].filter(burger => burger.id !== burgerObj.id);
    this.setState({ 
      allBurgers: [...newArr, burgerObj],
      shownBurger: burgerObj 
    })
  }

  render() {

    let burgersToRender;

    if (this.state.burgerFilter === "All") {
      burgersToRender = this.state.allBurgers
    } else { 
      burgersToRender = [...this.state.allBurgers].filter(burger => burger.category === this.state.burgerFilter)   
    }

    return (
      <div id="App">
        <BurgerContainer burgersToRender={burgersToRender} showBurger={this.showBurger} handleFilterChange={this.handleFilterChange} hideBurger={this.hideBurger} />
        <BurgerDisplay burger={this.state.shownBurger} persistCatChange={this.persistCatChange} />
      </div>
    );
  }
}

export default App;
