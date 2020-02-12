import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from '../LanguageSelector';
import './AdminNav.css';


const AdminNav = () => (
  <div>
    {/* Example */}
    <Navbar id="navbar-admin" bg="black" expand="lg">
      <Navbar.Brand href="/admin/login">
        <img alt="logo" src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto admin-navlinks">
          <Nav.Link id="navbar-link-admin" href="/admin/login">
            Login
          </Nav.Link>
          <Nav.Link href="/admin/">
            Backoffice Home
          </Nav.Link>
          <Nav.Link href="/admin/quiz_list">
            Manage Quizzes
          </Nav.Link>
          <Nav.Link href="/admin/doc_list">
            Manage Documentation
          </Nav.Link>
          <Nav.Link href="/admin/login">
            Log Out
          </Nav.Link>
          <Nav.Link href="/learners/login">
            Learner Portal
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <DropdownSelector />
    </Navbar>
  </div>
);
export default AdminNav;
