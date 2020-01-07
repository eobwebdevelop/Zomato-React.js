import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown}  from 'react-bootstrap';




import "./LearnerNav.css";


const LearnerNav = () => {
  return (
    <div>
      {/* Example */}
      <Navbar bg="tyrolean" expand="lg">
        <Navbar.Brand href="#home"><img src='https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Learners/SignUp/SignUp">Sign Up</Nav.Link>
            <Nav.Link href="/Learners/LogIn/LogIn">Login</Nav.Link>
            <Nav.Link href="/Learners/ContactUs/ContactUs">Contact Us</Nav.Link>


            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <ul>
        <u>Learners</u>
        <li>
          <a href="/Learners/LogIn/LogIn">Login </a>
        </li>
        <li>
          <a href="/Learners/SignUp/SignUp">SignUp </a>
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
