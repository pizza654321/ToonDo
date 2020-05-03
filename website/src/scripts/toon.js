import React, { Component } from "react"; 

class Toon extends Component { 
  constructor(props) {    
    super(props);     

    this.state = {    
      health: 75
    };

    // this.addItem = this.addItem.bind(this); 
    // this.deleteItem = this.deleteItem.bind(this);
  }
  takeLife = () =>{
    let health = this.state.health;
    this.setState({health: health-15})
  }

  giveLife = () =>{
    let health = this.state.health;
    this.setState({health: health+15})
  }
  render() {    
    return (    
        <div className ="toonSide">
        <img src={require("../images/gator-toon.png")} height="300px" width="280px"></img>
        <progress value={this.state.health} max='100'></progress>
        <button onClick={this.giveLife}>Give life</button>
        <button onClick={this.takeLife}>Take life</button>
        </div>
    );  
  }
}
export default Toon;
