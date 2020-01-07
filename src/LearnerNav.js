import React from "react";

const LearnerNav = () => {
  return (
    <div>
      <ul>
        <u>Learners</u>
        <li>
          <a href="/Learners/LogIn/LogIn">Login </a>
        </li>
        <li>
          <a href="/Learners/SignUp/SignUp">Sign Up </a>
        </li>
        <li>
          <a href="/Learners/QuizList/QuizList">Quiz List </a>
        </li>
        <li>
          <a href="/Learners/quiz/Question">Question </a>
        </li>{" "}
        <li>
          <a href="/Learners/quiz/Answer">Answer </a>
        </li>
        <li>
          <a href="/Learners/quiz/quiz">Quiz </a>
        </li>
        <li>
          <a href="/Learners/quiz/Results">Results </a>
        </li>
        <li>
          <a href="/Learners/ContactUs/ContactUs">Contact Us </a>
        </li>
        <li>
          <a href="/Learners/FAQ/FAQ"> FAQ </a>
        </li>
      </ul>
    </div>
  );
};
export default LearnerNav;
