import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from './LanguageSelector';
import './LearnerNav.css';
import LanguagesContext, { availableLanguages } from './contexts/languages-context';
import translations from './i18n/translations';


const LearnerNav = () => {
  const { currentLanguage } = useContext(LanguagesContext);
  console.log('lang', currentLanguage);
  console.log('transl', translations);
  return (
    <div>
      {/* Example */}
      <Navbar class="learner-navbar" bg="tyrolean" expand="lg">
        <Navbar.Brand href="/Learners/QuizList/QuizList">
          <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="learner-basic-navbar-nav">
          <Nav className="mr-auto learner-navlinks">
            <Nav.Link href="/Learners/SignUp/SignUp">
              <a className="grey-link">{translations[currentLanguage].LearnerNav.LinkS}</a>
            </Nav.Link>
            <Nav.Link href="/Learners/LogIn/LogIn">
              <a className="grey-link">{translations[currentLanguage].LearnerNav.LinkL}</a>
            </Nav.Link>
            <Nav.Link href="/Learners/QuizList/QuizList">
              <a className="grey-link">{translations[currentLanguage].LearnerNav.LinkQ}</a>
            </Nav.Link>
            <Nav.Link href="/Learners/FAQ/FAQ">
              <a className="grey-link">{translations[currentLanguage].LearnerNav.LinkF}</a>
            </Nav.Link>
            <Nav.Link href="/Learners/ContactUs/ContactUs">
              <a className="grey-link">{translations[currentLanguage].LearnerNav.LinkC}</a>
            </Nav.Link>
            <Nav.Link href="/Admin/AdminAppLogin">
              <a className="grey-link">{translations[currentLanguage].LearnerNav.LinkA}</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <DropdownSelector />
      </Navbar>

      {/* <ul>
        <u>Learners</u>
        <li>
          <a href="/Learners/LogIn/LogIn">Login </a>
        </li>
        <li>
          <a href="/Learners/SignUp/SignUp">Sign Up </a>
        </li>
        <li>
          <a href="/Learners/QuizList/QuizList">Quiz List </a>
        </li>
        <li>
          <a href="/Learners/quiz/Question">Question </a>
        </li>{" "}
        <li>
          <a href="/Learners/quiz/Answer">Answer </a>
        </li>
        <li>
          <a href="/Learners/quiz/quiz">Quiz </a>
        </li>
        <li>
          <a href="/Learners/quiz/Results">Results </a>
        </li>
        <li>
          <a href="/Learners/ContactUs/ContactUs">Contact Us </a>
        </li>
        <li>
          <a href="/Learners/FAQ/FAQ"> FAQ </a>
        </li>
      </ul> */}
    </div>
  );
};
export default LearnerNav;
