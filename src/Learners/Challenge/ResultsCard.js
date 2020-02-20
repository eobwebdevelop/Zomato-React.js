import React from 'react';
import PropTypes from 'prop-types';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';


class ResultsCard extends React.Component {
  render() {
    const {
      correctAnswerText,
      questionNumber,
      questionText,
      userAnswerText,
    } = this.props;

    if (userAnswerText === correctAnswerText) {
      return (
        <LanguagesContext.Consumer>
          {({ currentLanguage }) => (
            <div>
              <h1>
                {translations[currentLanguage].ResultsCard.Title}
                {' '}
                {questionNumber}
                :
                {' '}
                {questionText}
              </h1>

              <h2>
                {translations[currentLanguage].ResultsCard.Ok}
                {' '}
                <span role="img" aria-label="jsx-a11y/accessible-emoji">
                  ✅
                </span>
                {' '}
              </h2>
              <p>
                {translations[currentLanguage].ResultsCard.Ans}
                {userAnswerText}
              </p>
            </div>
          )}
        </LanguagesContext.Consumer>
      );
    }
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <div>
            <h1>
              {translations[currentLanguage].ResultsCard.Title}
              {' '}
              {questionNumber}
              :
              {' '}
              {questionText}
            </h1>
            <h2>
              {translations[currentLanguage].ResultsCard.No}
              {' '}
              <span role="img" aria-label="jsx-a11y/accessible-emoji">
                ❌
              </span>
            </h2>
            <p>
              {translations[currentLanguage].ResultsCard.Ans}
              {userAnswerText}
            </p>
            <p>
              {translations[currentLanguage].ResultsCard.WhatsOK}
              {correctAnswerText}
            </p>
          </div>
        )}
      </LanguagesContext.Consumer>
    );
  }
}

ResultsCard.propTypes = {
  correctAnswerText: PropTypes.func.isRequired,
  questionNumber: PropTypes.func.isRequired,
  questionText: PropTypes.func.isRequired,
  userAnswerText: PropTypes.func.isRequired,
};
export default ResultsCard;
