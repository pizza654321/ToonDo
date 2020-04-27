import React, { Component } from "react";
import ReactDOM from "react";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    // this.addItem = this.addItem.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
        <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    );
  }
}
export default LogIn;
