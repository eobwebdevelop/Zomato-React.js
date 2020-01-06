import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AdminApp.css";

class AdminApp extends Component {
  render() {
    return (
      <>
        <div>
          <h1>
            Admin Main Page <br />
            Login to Admin Portal
          </h1>

          <form>
            <input type="text" title="username" placeholder="username" />
            <br />
            <input type="password" title="username" placeholder="password" />
            <br />
            <Link to="./Login">
              <button type="submit" class="btn">
                Login
              </button>
            </Link>
            <br />
            <a class="forgot" href="#">
              Forgot Username?
            </a>
          </form>
        </div>
      </>
    );
  }
}

export default AdminApp;
