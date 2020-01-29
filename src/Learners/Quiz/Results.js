import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const Results = () => {
  const { currentLanguage } = useContext(LanguagesContext);
  return (
    <div>
      <Container>
        <h1>{translations[currentLanguage].Results.Title}</h1>
        <hr />
        <p>You got 50% (5/10)</p>
        <Link to="/learners/documentation">
          <button type="submit" className="btn">
            {translations[currentLanguage].Results.ButtonD}
          </button>
        </Link>
        <br />
        <Link to="/learners/quiz_list">
          <button type="submit" className="btn">
            {translations[currentLanguage].Results.ButtonH}
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default Results;
