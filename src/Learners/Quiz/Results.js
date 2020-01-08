import React from "react";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <div>
      <h1>Results</h1>
      <p>You got 50% (5/10)</p>
      <Link to="/Learners/Documentation/Documentation">
        <button type="submit" class="btn-login">
          View Documentation
        </button>
      </Link>
      <br />
      <Link to="/Learners/QuizList/QuizList">
        <button type="submit" class="btn">
          Home
        </button>
      </Link>
    </div>
  );
};
export default Results;
