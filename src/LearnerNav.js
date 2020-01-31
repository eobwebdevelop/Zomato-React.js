import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from './LanguageSelector';
import './LearnerNav.css';
import LanguagesContext from './contexts/languages-context';
import translations from './i18n/translations';

const LearnerNav = () => {
  const { currentLanguage } = useContext(LanguagesContext);
  // console.log('lang', currentLanguage)
  // console.log('transl', translations)
  return (
    <div>
      {/* Example */}
      <Navbar className="learner-navbar" bg="tyrolean" expand="lg">
        <Navbar.Brand href="/learners/quiz_list">
          <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="learner-basic-navbar-nav">
          <Nav className="mr-auto learner-navlinks">
            <Nav.Link href="/learners/login" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkL}
            </Nav.Link>
            <Nav.Link href="/learners/quiz_list" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkQ}
            </Nav.Link>
            <Nav.Link href="/learners/faq" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkF}
            </Nav.Link>
            <Nav.Link href="/learners/contact_us" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkC}
            </Nav.Link>
            <Nav.Link href="/admin/login" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkA}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <DropdownSelector />
      </Navbar>

    </div>
  );
};
export default LearnerNav;
