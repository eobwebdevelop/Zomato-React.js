import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const LogIn = () => {
  return (
    <div>
      <Container>
        <div class="formparentcontainer">
          <div class="formchildcontainer">
            <h1 id="h1-login">Quiz</h1>

            <form>
              <input type="text" title="username" placeholder=" Username" />
              <br />
              <input type="password" title="username" placeholder=" Password" />
              <br />
              <Link to="/Learners/QuizList/QuizList">
                <button type="submit" class="btn-login">
                  Login
                </button>
              </Link>
            </form>
          </div>
          <div class="forgotpassword-signup">
            <Link to="/Learners/LogIn/ForgotPassword">
              <a id="forgotpassword" href="/Learners/LogIn/ForgotPassword">
                Forgot password? <br />
              </a>
            </Link>
            Don't have an account?{" "}
            <Link to="/Learners/SignUp/SignUp">
              <a id="signup" href="">
                Sign-Up
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default LogIn;
