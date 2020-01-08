import React, { Component } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <h1>Quiz</h1>

      <form>
        <input type="text" title="username" placeholder="username" />
        <br />
        <input type="password" title="username" placeholder="password" />
        <br />
        <Link to="./Login">
          <button type="submit" class="btn-login">
            Login
          </button>
        </Link>
        <br />
        <Link to="./Login">
          <a class="forgot" href="#">
            Forgot password? <br />
          </a>
        </Link>
        Don't have an account?{" "}
        <Link to="./SignUp/SignUp">
          <a href="">Sign-Up</a>
        </Link>
      </form>

      <p>
        {" "}
        Do you want to <a href="/Learners/MainPage/MainPage">sign-up?</a>
      </p>
    </div>
  );
};
export default LogIn;
