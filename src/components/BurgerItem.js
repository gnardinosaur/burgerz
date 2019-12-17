import React, { Component } from 'react';

class BurgerItem extends Component {

  state = {
    display: "block"
  }

  changeDisplay = () => {
    this.setState({ display: "none" })
  }

  render() {
    console.log(this.state)
    return ( 
      <div style={{display: this.state.display}} >
        <div className="BurgerItem">
          {this.props.name}
        </div>
        <div className="BurgerBottomBun">
          <button onClick={() => this.props.showBurger(this.props)}>Show</button>
          <button onClick={this.changeDisplay}>Delete</button>
        </div>
      </div>
    )
  }
} 

export default BurgerItem

