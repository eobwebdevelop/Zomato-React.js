import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import DropdownSelector from "./DropdownSelector";

import "./AdminNav.css";

const AdminNav = () => {
  return (
    <div>
      {/* Example */}
      <Navbar bg="tyrolean" expand="lg">
        <Navbar.Brand href="/Learners/QuizList/QuizList">
          <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navlinks">
            <Nav.Link href="/Admin/AdminAppLogIn">Login</Nav.Link>
            <Nav.Link href="/Admin/AdminQuizList">Manage Quizzes</Nav.Link>
            <Nav.Link href="/Admin/AdminUserConfig">Manage Users</Nav.Link>
            <Nav.Link href="/Admin/AdminAppLogIn">Log Out</Nav.Link>
            <Nav.Link href="/Learners/Login/Login">Learner Portal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <DropdownSelector />
      </Navbar>
    </div>
  );
};
export default AdminNav;
