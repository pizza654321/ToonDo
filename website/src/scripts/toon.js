import React, { Component } from "react"; 
import "../styles/toon.css";
import happy from "../images/cat-toon-happy.jpeg"
import normal from "../images/cat-toon-normal.jpeg"
import sad from "../images/cat-toon-sad.jpeg"
import dead from "../images/cat-toon-dead.jpeg"

const images = {
  happy: happy,
  normal: normal,
  sad: sad,
  dead: dead
}

class Toon extends Component { 
  constructor(props) {    
    super(props);     

    this.state = {    
      health: this.props.health,
      mood: this.props.mood
    };
  }

  takeLife = () =>{
    let health = this.state.health;
    this.setState({health: health-10});
    this.props._takeLifeParent();
  }

  giveLife = () =>{
    let health = this.state.health;
    this.setState({health: health+10});
    this.props._giveLifeParent();
  }

  updateState = () => {
    if (this.props.health >= 70) {
      this.state.mood = "happy"
    } else if (this.props.health >= 30) {
      this.state.mood = "normal"
    } else if (this.props.health >= 10) {
      this.state.mood = "sad"
    } else {
      this.state.mood = "dead"
    }

    this.props._updateStateParent();

    return this.state.mood
  }

  render() {
    const image = this.updateState()   
    return (    
        <div className ="toonSide">
          <img src={images[image]} height="300px" width="280px"></img>
          <progress value={this.props.health} max='100' id="progress-bar"></progress>
        </div>
    );  
  }
}

export default Toon;
