import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1> Sign-Up </h1>
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
    </div>
  );
};
export default SignUp;
