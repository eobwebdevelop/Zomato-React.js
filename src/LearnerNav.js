import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from './LanguageSelector';
import './LearnerNav.css';
import LanguagesContext, {
  availableLanguages,
} from './contexts/languages-context';
import translations from './i18n/translations';

const LearnerNav = () => {
  const { currentLanguage } = useContext(LanguagesContext);
  // console.log('lang', currentLanguage)
  // console.log('transl', translations)
  return (
    <div>
      {/* Example */}
      <Navbar className="learner-navbar" bg="tyrolean" expand="lg">
        <Navbar.Brand href="/Learners/QuizList">
          <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="learner-basic-navbar-nav">
          <Nav className="mr-auto learner-navlinks">
            <Nav.Link href="/Learners/SignUp" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkS}
            </Nav.Link>
            <Nav.Link href="/Learners/LogIn" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkL}
            </Nav.Link>
            <Nav.Link href="/Learners/QuizList" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkQ}
            </Nav.Link>
            <Nav.Link href="/Learners/FAQ" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkF}
            </Nav.Link>
            <Nav.Link href="/Learners/ContactUs" className="grey-link">
              {translations[currentLanguage].LearnerNav.LinkC}
            </Nav.Link>
            <Nav.Link href="/Admin/AdminAppLogin" className="grey-link">
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
