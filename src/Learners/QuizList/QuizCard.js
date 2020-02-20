import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';


class QuizCard extends Component {
  render() {
    const {
      quizTitle,
      QuizLinkText,
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
              onClick={() => changeQuizIDInPlay(quizID, quizTitle)}
            >
              {QuizLinkText}
              {translations[currentLanguage].QuizCard.LinkQ}
              {' '}
              <span className="triangle">&#9658;</span>
              <br />
            </Link>
          </>
        )}
      </LanguagesContext.Consumer>
    );
  }
}

// QuizCard.propTypes = {
//   quizTitle: PropTypes.string.isRequired,
//   QuizLinkText: PropTypes.string.isRequired,
//   DocumentationLinkText: PropTypes.string.isRequired,
//   quizID: PropTypes.number.isRequired,
//   changeQuizIDInPlay: PropTypes.func.isRequired,
// };

export default QuizCard;
