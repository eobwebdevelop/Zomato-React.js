import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FaqCard from './FaqCard';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';

const FAQ = ({ learnerFaq }) => {
  const { currentLanguage } = useContext(LanguagesContext);
  return (
    <>
      <div>
        <Container>
          <h1>{translations[currentLanguage].FAQ.Title}</h1>
          <hr />

          {learnerFaq.map((el) => (
            <FaqCard
              key={el.id}
              Faq={el.faq_question}
              FaqC={el.content}
            />
          ))}
          <Link to="/learners/quiz_list">
            <button type="submit" className="btn">
              {translations[currentLanguage].Documentation.Button}
            </button>
          </Link>
        </Container>
      </div>
    </>
  );
};
export default FAQ;
