import React, { Component } from "react";
import ReactDOM from "react";
import TodoItems from "./todo-items";
import TodoList from "./todo-list";
import Home from "./homepage.js";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      homePage: true,
      toonDoPage: false,
    };

    // this.addItem = this.addItem.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }
  toggleToonDo = () => {
    this.setState({ homePage: false, toonDoPage: true });
  }

  toggleHome = () => {
    this.setState({ toonDoPage: false, homePage: true });
  }
  
  render() {
    return (
      <div>
        {this.state.homePage && (
          <div>
            <nav
              id="navbar"
              class="navbar navbar-expand-lg navbar-light bg-light"
            >
              <img src={require("../images/logo.png")} height="50" width="50" />
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#" onClick={this.toggleHome}>
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" onClick={this.toggleToonDo}>
                      Toon
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Log in
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="page-content">
            <Home />
            </div>
          </div>
        )}
        {this.state.toonDoPage && (
          <div>
            <nav
              id="navbar"
              class="navbar navbar-expand-lg navbar-light bg-light"
            >
              <img src={require("../images/logo.png")} height="50" width="50" />
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item ">
                    <a class="nav-link" href="#" onClick={this.toggleHome}>
                      Home
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="#" onClick={this.toggleToonDo}>
                      Toon <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Log in
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="page-content">
            <TodoList />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default NavBar;
