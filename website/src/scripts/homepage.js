import React, { Component } from "react"; 
import "../styles/todo-list.css";
import TodoItems from "./todo-items";
import TodoList from './todo-list';
import UserCredentials from './user-credentials';

class Home extends Component { 
  constructor(props) {    
    super(props);     

    this.state = {    
      loggedIn: false 
    };

    // this.addItem = this.addItem.bind(this); 
    // this.deleteItem = this.deleteItem.bind(this);
  }
  render() {    
    return (    
        <div>
        <div className = "toonDoHome">
            <h3>Welcome to ToonDo</h3>
            <p>ToonDo is your solution to always forgetting important tasks or putting them off for later, just to completely forget about them. ToonDo allows you to 'gameify' your todo lists and nurture your very own Toon!</p>
            <p>It's simple: complete your tasks and your toon will thrive or forget your tasks and let your toon perish. It is up to you!</p>
        </div>
        <UserCredentials/>
        </div>
    );  
  }
}
export default Home;
