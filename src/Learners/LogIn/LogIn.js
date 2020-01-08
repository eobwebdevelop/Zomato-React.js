import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const LogIn = () => {
  return (
    <div>
      <Container>
        <h1>Quiz</h1>
        <hr></hr>

        <form>
          <input type="text" title="username" placeholder="username" />
          <br />
          <input type="password" title="username" placeholder="password" />
          <br />
          <Link to="/Learners/QuizList/QuizList">
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
          <Link to="/Learners/SignUp/SignUp">
            <a href="">Sign-Up</a>
          </Link>
        </form>
      </Container>
    </div>
  );
};
export default LogIn;
