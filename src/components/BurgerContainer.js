import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {


  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter handleFilterChange={this.props.handleFilterChange}/>
        <BurgerList burgersToRender={this.props.burgersToRender} showBurger={this.props.showBurger} />
      </div>
    )
  }
}
