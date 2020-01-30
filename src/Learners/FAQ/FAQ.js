import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const FAQ = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <div>
      <Container>
        <div>
          <h1>{translations[currentLanguage].FAQ.Title}</h1>
          <hr />
          <h2>Is this a question?</h2>
          <p>
            Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
            kjbbaj,snjsns jn kjn kj
          </p>
          <h2>Is this a question?</h2>
          <p>
            Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
            kjbbaj,snjsns jn kjn kj
          </p>
          <h2>Is this a question?</h2>
          <p>
            Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
            kjbbaj,snjsns jn kjn kj
          </p>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
