import React from "react";
import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <div>
      <h1>Quiz</h1>
      <Link to="/Learners/Quiz/Results">
        <button type="submit" class="btn">
          View Results
        </button>
      </Link>
    </div>
  );
};
export default Quiz;
