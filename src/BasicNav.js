import React from 'react';
import { Navbar } from 'react-bootstrap';
import DropdownSelector from './LanguageSelector';



const BasicNav = () => (
  <div>
    <Navbar className="learner-navbar" bg="tyrolean" expand="lg">
      <Navbar.Brand href="/learners/login">
        <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" alt="Zomato logo" />
      </Navbar.Brand>
      <DropdownSelector />
    </Navbar>
  </div>
);
export default BasicNav;
