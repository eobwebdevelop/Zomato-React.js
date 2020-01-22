import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const Quiz = () => {
  const { currentLanguage } = useContext(LanguagesContext);
  return (
    <div>
      <Container>
        <h1>{translations[currentLanguage].Quiz.Title}</h1>
        <hr />
        <Link to="/Learners/Quiz/Results">
          <button type="submit" className="btn">
            {translations[currentLanguage].Quiz.ButtonR}
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default Quiz;
