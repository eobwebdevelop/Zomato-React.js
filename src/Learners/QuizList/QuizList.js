import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import LanguagesContext, {
  availableLanguages
} from "../../contexts/languages-context";
import translations from "../../i18n/translations";

const QuizList = () => {
  const { currentLanguage } = useContext(LanguagesContext);
  return (
    <>
      <div>
        <Container>
          <h1>{translations[currentLanguage].QuizList.Title}</h1>
          <hr />
          <h2>Zomato Gold</h2>
          <p>Short description about the quiz and why you should do it.</p>
          <Link to="/Learners/Quiz/Answer">
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Learners/Quiz/Answer"
            >
              {translations[currentLanguage].QuizList.LinkQ}
            </a>
          </Link>

          <Link to="/Learners/Documentation/Documentation">
            <a
              className="cranberry-link"
              href="/Learners/Documentation/Documentation"
            >
              {translations[currentLanguage].QuizList.LinkD}
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
};
export default QuizList;
