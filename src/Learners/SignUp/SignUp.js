import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const SignUp = () => {
  return (
    <div>
      <Container>
        <div class="formparentcontainer">
          <h1 id="h1-login"> Sign-Up </h1>

          <form>
            <input type="text" title="name" placeholder=" Name*" />
            <br />
            <input type="text" title="email" placeholder=" Email*" />
            <br />
            <input type="text" title="email" placeholder=" Restaurant" />
            <br />
            <input type="password" title="password" placeholder=" Password" />
            <br />
            <input
              type="password"
              title="password"
              placeholder=" Confirm Password"
            />
            <br />
            <Link to="/Learners/QuizList/QuizList">
              <button type="submit" class="btn-login">
                Sign-Up
              </button>
            </Link>
            <br />
          </form>
        </div>
      </Container>
    </div>
  );
};
export default SignUp;
