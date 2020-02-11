import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';
import './About.css';


const About = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <Container>
      <div className="formchildcontainer aboutContactContainer">
        <h1 className="title">{translations[currentLanguage].About.Title}</h1>
        <hr />
        <p className="aboutText">
          {translations[currentLanguage].About.TextAbout}
        </p>
        <img src="https://i.imgur.com/Ebx0XsR.jpg" className="aboutImage" />

        <div className="formchildcontainer contact">
          <h1 className="title">{translations[currentLanguage].About.TitleC}</h1>
          <hr />
          <p className="aboutContact">
            <img src="https://i.imgur.com/8Ea79Bg.png" className="flag" />
            <span className="country"> PORTUGAL</span>
          </p>
          <p className="number">
            {translations[currentLanguage].About.TextContact}
          </p>
        </div>
      </div>

    </Container>
  );
};
export default About;
