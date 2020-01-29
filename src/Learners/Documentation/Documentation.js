import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const Documentation = ({ documentation }) => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <div>
      <Container>
        <h1>{translations[currentLanguage].Documentation.Title}</h1>
        <hr />
        {
        documentation.map((doc) => (
          <div key={doc.id}>
            <h2>{doc.title}</h2>
            <p>{ReactHtmlParser(doc.content)}</p>
          </div>
        ))
          }
        <Link to="/learners/quiz_list">
          <button type="submit" className="btn">
            {translations[currentLanguage].Documentation.Button}
          </button>
        </Link>
      </Container>
    </div>
  );
};

Documentation.propTypes = {
  documentation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Documentation;
