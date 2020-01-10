import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import DropdownSelector from "./DropdownSelector";

import "./AdminNav.css";

const AdminNav = () => {
  return (
    <div>
      {/* Example */}
      <Navbar id="navbar-admin" bg="black" expand="lg">
        <Navbar.Brand href="/Learners/QuizList/QuizList">
          <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto admin-navlinks">
            <Nav.Link id="navbar-link-admin" href="/Admin/AdminAppLogIn">
              <a class="white-link">Login</a>
            </Nav.Link>
            <Nav.Link href="/Admin/AdminQuizList">
              <a class="white-link">Manage Quizzes</a>
            </Nav.Link>
            <Nav.Link href="/Admin/AdminUserConfig">
              <a class="white-link">Manage Users</a>
            </Nav.Link>
            <Nav.Link href="/Admin/AdminAppLogIn">
              <a class="white-link">Log Out</a>
            </Nav.Link>
            <Nav.Link href="/Learners/Login/Login">
              <a class="white-link">Learner Portal</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <DropdownSelector />
      </Navbar>
    </div>
  );
};
export default AdminNav;
