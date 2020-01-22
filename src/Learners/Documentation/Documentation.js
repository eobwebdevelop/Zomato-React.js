import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';

const Documentation = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  // should be a map of the fetch - structure for one piece of documentation
  return (
    <div>
      <Container>
        <h1>{translations[currentLanguage].Documentation.Title}</h1>
        <hr />
        <h2>Heading</h2>
        <p>
          Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
          kjbbaj,snjsns jn kjn kj
        </p>
        <h2>Heading</h2>
        <p>
          Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
          kjbbaj,snjsns jn kjn kj
        </p>
        <h2>Heading</h2>
        <p>
          Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
          kjbbaj,snjsns jn kjn kj
        </p>
        <Link to="/Learners/QuizList/QuizList">
          <button type="submit" className="btn">
            {translations[currentLanguage].Documentation.Button}
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default Documentation;
