import React, { Component } from "react";
import { Link } from 'react-router-dom';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';
// import { Container } from "react-bootstrap";

class QuizCard extends Component {
  render() {
    const {
      quizTitle,
      QuizLinkText,
      DocumentationLinkText,
      quizID,
      changeQuizIDInPlay,
    } = this.props;

    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <>
            <h2>{quizTitle}</h2>

            <Link
              to="/learners/quiz_list/quiz"
              className="view-quizzes-page-links-side-by-side"
              onClick={() => changeQuizIDInPlay(quizID)}
            >
              {QuizLinkText}
              {translations[currentLanguage].QuizCard.LinkQ}
              <br />
            </Link>
            <Link to="/learners/documentation" className="cranberry-link">
              {DocumentationLinkText}
              {translations[currentLanguage].QuizCard.LinkD}
            </Link>
          </>
        )}
      </LanguagesContext.Consumer>
    );
  }
}
export default QuizCard;
