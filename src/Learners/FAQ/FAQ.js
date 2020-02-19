import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import FaqCard from "./FaqCard";
import LanguagesContext from "../../contexts/languages-context";
import translations from "../../i18n/translations";

const FAQ = ({ learnerFaq }) => {
  const { currentLanguage } = useContext(LanguagesContext);
  let history = useHistory();
  return (
    <>
      <div>
        <Container>
          <h1>{translations[currentLanguage].FAQ.Title}</h1>
          <hr />

          {learnerFaq.map(el => (
            <FaqCard key={el.id} Faq={el.faq_question} FaqC={el.content} />
          ))}

          <button
            type="submit"
            className="btn"
            onClick={() => history.goBack()}
          >
            {translations[currentLanguage].Documentation.Button}
          </button>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
