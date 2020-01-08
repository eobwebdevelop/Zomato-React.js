import React from "react";
import { Link } from "react-router-dom";

const QuizList = () => {
  return (
    <>
      <div>
        <h1>Available Quizzes</h1>
        <hr />
        <h2>Zomato Gold</h2>
        <p>Short description about the quiz and why you should do it.</p>
        <Link to="/Learners/Quiz/Quiz">
          <a href="/Learners/Quiz/Quiz">Take Quiz ►</a>
        </Link>

        <Link to="/Learners/Documentation/Documentation">
          <a href="/Learners/Documentation/Documentation">Documentation ►</a>
        </Link>
      </div>
    </>
  );
};
export default QuizList;
