import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import DropdownSelector from "./DropdownSelector";

import "./LearnerNav.css";

const LearnerNav = () => {
  return (
    <div>
      {/* Example */}
      <Navbar class="learner-navbar" bg="tyrolean" expand="lg">
        <Navbar.Brand href="/Learners/QuizList/QuizList">
          <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="learner-basic-navbar-nav">
          <Nav className="mr-auto learner-navlinks">
            <Nav.Link href="/Learners/SignUp/SignUp">
              <a class="grey-link">Sign Up</a>
            </Nav.Link>
            <Nav.Link href="/Learners/LogIn/LogIn">
              <a class="grey-link">Login</a>
            </Nav.Link>
            <Nav.Link href="/Learners/QuizList/QuizList">
              <a class="grey-link">All Quizzes</a>
            </Nav.Link>
            <Nav.Link href="/Learners/FAQ/FAQ">
              <a class="grey-link">FAQ</a>
            </Nav.Link>
            <Nav.Link href="/Learners/ContactUs/ContactUs">
              <a class="grey-link">Contact</a>
            </Nav.Link>
            <Nav.Link href="/Admin/AdminAppLogin">
              <a class="grey-link">Admin Portal</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <DropdownSelector />
      </Navbar>

      {/* <ul>
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
      </ul> */}
    </div>
  );
};
export default LearnerNav;
