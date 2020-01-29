import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from '../LanguageSelector';
import './AdminNav.css';


const AdminNav = () => (
  <div>
    {/* Example */}
    <Navbar id="navbar-admin" bg="black" expand="lg">
      <Navbar.Brand href="/Learners/QuizList/QuizList">
        <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto admin-navlinks">
          <Nav.Link id="navbar-link-admin" href="/Admin/AdminAppLogIn" className="white-link">
            Login
          </Nav.Link>
          <Nav.Link href="/Admin/" className="white-link">
            Backoffice Home
          </Nav.Link>
          <Nav.Link href="/Admin/AdminQuizList" className="white-link">
            Manage Quizzes
          </Nav.Link>
          <Nav.Link href="/Admin/AdminDocList" className="white-link">
            Manage Documentation
          </Nav.Link>
          <Nav.Link href="/Admin/AdminAppLogIn" className="white-link">
            Log Out
          </Nav.Link>
          <Nav.Link href="/Learners/Login" className="white-link">
            Learner Portal
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <DropdownSelector />
    </Navbar>
  </div>
);
export default AdminNav;
