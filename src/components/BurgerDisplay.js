import React from 'react';

const BurgerDisplay = (props) => {
  
  if (props.burger) {
    return (
      <div className="BurgerDisplay">
        <img src={props.burger.imgURL} alt=""/>
        <br/>
        <h1>{props.burger.name}</h1>
        <br/>
        <select onChange={(e) => props.persistCatChange(e, props.burger.id)} value={props.burger.category}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option> 
        </select>
      </div>
    )
  }
}

export default BurgerDisplay
