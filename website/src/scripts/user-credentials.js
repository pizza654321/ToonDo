import React, { Component } from "react";
import ReactDOM from "react";
import Login from "./log-in.js";
import Signup from "./sign-up.js";

class UserCredentials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      signUp: true,
      logIn: false,
    };

    // this.addItem = this.addItem.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }
  toggleSignUp = () => {
    this.setState({ signUp: true, logIn: false });
  };

  toggleLogIn = () => {
    this.setState({ signUp: false, logIn: true });
  };

  render() {
    return (
      <div>
        {this.state.signUp && (
          <div className = "credentials-form">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#" onClick ={this.toggleSignUp}>
                  Sign up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" onClick ={this.toggleLogIn}>
                  Log in
                </a>
              </li>
            </ul>
            <Signup/>
          </div>
        )}
        {this.state.logIn && (
          <div className = "credentials-form">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" href="#" onClick ={this.toggleSignUp}>
                  Sign up
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#" onClick ={this.toggleLogIn}>
                  Log in
                </a>
              </li>
            </ul>
            <Login/>
          </div>
        )}
      </div>
    );
  }
}
export default UserCredentials;
