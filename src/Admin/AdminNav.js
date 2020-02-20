import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from '../LanguageSelector';
import './AdminNav.css';


const AdminNav = ({ clearTokenLogOut }) => (
  <div>
    <Navbar id="navbar-admin" bg="black" expand="lg">
      <Navbar.Brand href="/admin">
        <img
          alt="logo"
          src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto admin-navlinks">
          <Nav.Link href="/admin/">Dashboard</Nav.Link>
          <Nav.Link href="/admin/quiz_list">Quizzes</Nav.Link>
          <Nav.Link href="/admin/doc_list">Documentation</Nav.Link>
          <Nav.Link href="/admin/user_list">Users</Nav.Link>
          <Nav.Link href="/admin/restaurant_list">Restaurant</Nav.Link>
          <Nav.Link href="/admin/product_list">Products</Nav.Link>
          <Nav.Link href="/admin/result_list">Results</Nav.Link>
          <Nav.Link href="/admin/faq_list">FAQ</Nav.Link>
          <Nav.Link href="/admin/export_data">Export</Nav.Link>
          <Nav.Link href="/learners/login" onClick={clearTokenLogOut}>
            Log Out
          </Nav.Link>
          <Nav.Link href="/learners/quiz_list">Learner Portal</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <DropdownSelector />
    </Navbar>
  </div>
);


export default AdminNav;
