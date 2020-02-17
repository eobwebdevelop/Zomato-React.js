import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from '../LanguageSelector';
import './AdminNav.css';


const BasicNavbar = () => (
  <div>
    <Navbar id="navbar-admin" bg="black" expand="lg">
      <Navbar.Brand href="/admin/login">
        <img alt="logo" src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <DropdownSelector />
    </Navbar>
  </div>
);
export default BasicNavbar;
