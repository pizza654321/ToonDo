import React, { Component } from "react"; 
import "../styles/index.css";
import "../styles/modal.css";
import FlipMove from 'react-flip-move';

class TodoItems extends Component {  
  constructor(props) {    
    super(props);     
    this.createTasks = this.createTasks.bind(this);  
    this.state = {
      showModal: false,
      time: ""
    }
  }   
  
  delete(key){     
    this.props.delete(key);
    this.props._giveLifeParent();
    this.props._updateStateParent();
  }

  createTasks(item) {    
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
  }   
  
  render() {    
    var todoEntries = this.props.entries;    
    var listItems = todoEntries.map(this.createTasks);     
    
    return (      
      <div>
        <ul className="theList">
          <FlipMove duration={250} easing="ease-out">      
            {listItems}
          </FlipMove>   
        </ul>
        { this.state.showModal ? <div className="toon-modal">
          <h3>Enter time</h3>
          <select>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="year">Year</option>
          </select>
          <button onClick={() => this.setState({showModal:false})}></button>
        </div> : null}
      </div>
      );
    }
  } 
  
  export default TodoItems;