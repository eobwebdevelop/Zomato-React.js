import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from './LanguageSelector';
import './LearnerNav.css';
import LanguagesContext from './contexts/languages-context';
import translations from './i18n/translations';

const LearnerNav = (props) => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <div>
      {/* Example */}
      <Navbar className="learner-navbar" bg="tyrolean" expand="lg">
        <Navbar.Brand href="/learners/quiz_list">
          <img
            src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png"
            alt="Zomato logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="learner-basic-navbar-nav">
          <Nav className="mr-auto learner-navlinks">
            <Nav.Link href="/learners/login" className="grey-link" onClick={props.clearTokenLogOut}>
              {translations[currentLanguage].LearnerNav.LinkL}
            </Nav.Link>
            <Nav.Link href="/learners/quiz_list" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkQ}
            </Nav.Link>
            <Nav.Link href="/learners/faq" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkF}
            </Nav.Link>
            <Nav.Link href="/learners/about" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkC}
            </Nav.Link>
            { props.currentUser.isadmin
              ? (
                <Nav.Link href="/admin/" className="grey-link">
                  {translations[currentLanguage].LearnerNav.LinkD}
                </Nav.Link>
              )
              : null }
          </Nav>
        </Navbar.Collapse>
        <DropdownSelector />
      </Navbar>
    </div>
  );
};


export default LearnerNav;
