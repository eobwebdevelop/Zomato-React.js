import React from "react";
// import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
// import translations from '../../i18n/translations';

class ResultsCard extends React.Component {
  render() {
    const {
      correctAnswerID,
      correctAnswerText,
      questionNumber,
      questionText,
      userAnswerText,
      userAnswerID
    } = this.props;

    if (userAnswerText === correctAnswerText) {
      return (
        <>
          <h1>
            Question {questionNumber}: {questionText}
          </h1>

          <h2>
            Correct{" "}
            <span role="img" aria-label="jsx-a11y/accessible-emoji">
              ✅
            </span>{" "}
          </h2>
          <p>Your answer: {userAnswerText}</p>
        </>
      );
    }
    return (
      <>
        <h1>
          Question {questionNumber}: {questionText}
        </h1>
        <h2>
          Incorrect{" "}
          <span role="img" aria-label="jsx-a11y/accessible-emoji">
            ❌
          </span>
        </h2>
        <p>Your answer: {userAnswerText}</p>
        <p>The correct answer: {correctAnswerText}</p>
      </>
    );
  }
}
export default ResultsCard;
