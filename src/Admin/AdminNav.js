import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from '../LanguageSelector';
import './AdminNav.css';


const AdminNav = () => (
  <div>
    {/* Example */}
    <Navbar id="navbar-admin" bg="black" expand="lg">
      <Navbar.Brand href="/Learners/QuizList">
        <img alt="logo" src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto admin-navlinks">
          <Nav.Link id="navbar-link-admin" href="/Admin/AdminAppLogIn">
              Login
          </Nav.Link>
          <Nav.Link href="/Admin/">
              Backoffice Home
          </Nav.Link>
          <Nav.Link href="/Admin/AdminQuizList">
              Manage Quizzes
          </Nav.Link>
          <Nav.Link href="/Admin/AdminDocList">
              Manage Documentation
          </Nav.Link>
          <Nav.Link href="/Admin/AdminAppLogIn">
              Log Out
          </Nav.Link>
          <Nav.Link href="/Learners/Login">
              Learner Portal
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <DropdownSelector />
    </Navbar>
  </div>
);
export default AdminNav;
