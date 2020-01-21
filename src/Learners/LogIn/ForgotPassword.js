import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const ForgotPassword = () => {
  return (
    <div>
      <Container>
        <div class="formparentcontainer">
          <div class="formchildcontainer">
            <h1 id="h1-login">Forgot Password?</h1>
            <hr />
            <p>
              Forgotten your password? Enter your email address here to retrieve
              it. (Note to team: We haven't agreed this functionality, we don't
              have to include this page)
            </p>
            <form>
              <input
                type="text"
                title="email"
                placeholder=" Enter your email address"
              />
              <br />

              <Link to="/Learners/LogIn/LogIn">
                <button type="submit" class="btn-login">
                  Retrieve Password
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ForgotPassword;
