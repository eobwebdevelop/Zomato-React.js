import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';
import './About.css';


const About = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <div>
      <Container>
        <div className="formparentcontainer aboutText">
          <div className="formchildcontainer">
            <h1>{translations[currentLanguage].About.Title}</h1>
            <hr />
            <p>
              {translations[currentLanguage].About.TextAbout}
            </p>
            <img className="aboutImage" src="https://i.imgur.com/Ebx0XsR.jpg" />
          </div>
        </div>
        <div className="formparentcontainer contact">
          <div className="formchildcontainer">
            <h1>{translations[currentLanguage].About.TitleC}</h1>
            <hr />
            <p>
              {translations[currentLanguage].About.TextContact}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default About;
