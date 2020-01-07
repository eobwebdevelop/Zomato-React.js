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
          <button type="submit" class="btn">
            Login
          </button>
        </Link>
        <br />
        <Link to="./Login">
          <a class="forgot" href="#">
            Forgot password?
          </a>
        </Link>
        Don't have an account?{" "}
        <Link to="./Login">
          <button type="submit" class="btn">
            Sign-Up
          </button>
        </Link>
      </form>

      <p>
        {" "}
        Do you want to sign-up?<a href="/Learners/MainPage/MainPage">
          sign-up
        </a>{" "}
        or an <a href="/Admin/AdminApp">administrator</a>
      </p>
    </div>
  );
};
export default LogIn;
