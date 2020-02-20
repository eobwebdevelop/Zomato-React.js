import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import FaqCard from './FaqCard';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const FAQ = ({ learnerFaq }) => {
  const { currentLanguage } = useContext(LanguagesContext);
  const history = useHistory();
  if (FAQ === undefined) {
    return (
      <Container>
        <h1>Loading...</h1>
      </Container>
    );
  }

  if (FAQ.length === 0) {
    return (
      <Container>
        <h1>{translations[currentLanguage].FAQ.Title}</h1>
        <hr />
        <h1>{translations[currentLanguage].FAQ.Error}</h1>
      </Container>
    );
  }

  return (
    <>
      <div>
        <Container>
          <h1>{translations[currentLanguage].FAQ.Title}</h1>
          <hr />

          {learnerFaq.map((el) => (
            <FaqCard key={el.id} Faq={el.faq_question} FaqC={ReactHtmlParser(el.content)} />
          ))}

          <button
            type="submit"
            className="btn"
            onClick={() => history.goBack()}
          >
            {translations[currentLanguage].FAQ.Button}
          </button>
        </Container>
      </div>
    </>
  );
};

FAQ.propTypes = {
  learnerFaq: PropTypes.arrayOf(
    PropTypes.shape({
      faq_question: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FAQ;
