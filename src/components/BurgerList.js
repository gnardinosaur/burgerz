import React from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  return (
    <div className="BurgerList">
      {props.burgersToRender.map(burger => <BurgerItem key={burger.id} {...burger} showBurger={props.showBurger} />) }
    </div>
  )
}

export default BurgerList
