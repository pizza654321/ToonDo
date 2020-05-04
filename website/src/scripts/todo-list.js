import React, { Component } from "react";
import "../styles/todo-list.css";
import TodoItems from "./todo-items";
import Toon from "./toon";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      health: 0,
      mood: "dead"
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  _takeLife = () =>{
    let health = this.state.health;
    this.setState({health: health-10})
  }

  _giveLife = () =>{
    let health = this.state.health;
    this.setState({health: health+10})
  }

  _updateState = () => {
    if (this.state.health >= 70) {
      this.state.mood = "happy"
    } else if (this.state.health >= 30) {
      this.state.mood = "normal"
    } else if (this.state.health >= 10) {
      this.state.mood = "sad"
    } else {
      this.state.mood = "dead"
    }

    return this.state.mood
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now(),
      });

      this.setState({
        items: itemArray,
      });

      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="todoListAndToon">
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input
                ref={(a) => (this._inputElement = a)}
                placeholder="enter task"
              ></input>
              <button type="submit">add</button>
            </form>
          </div>

          <TodoItems entries={this.state.items} delete={this.deleteItem} _updateStateParent={this._updateState} _takeLifeParent={this._takeLife} _giveLifeParent={this._giveLife} />
        </div>
        <Toon _updateStateParent={this._updateState} _takeLifeParent={this._takeLife} _giveLifeParent={this._giveLife} health={this.state.health} mood={this.state.mood}/>
      </div>
    );
  }
}

export default TodoList;
