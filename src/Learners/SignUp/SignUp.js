import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const SignUp = () => {
  return (
    <div>
      <Container>
        <h1> Sign-Up </h1>
        <hr></hr>
        <form>
          <input type="text" title="name" placeholder="name" />
          <br />
          <input type="text" title="email" placeholder="email" />
          <br />
          <input type="password" title="password" placeholder="password" />
          <br />
          <Link to="/Learners/QuizList/QuizList">
            <button type="submit" class="btn-login">
              Sign-Up
            </button>
          </Link>
          <br />
        </form>
      </Container>
    </div>
  );
};
export default SignUp;
