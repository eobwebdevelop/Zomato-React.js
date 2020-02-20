import React, { Component } from "react";
import LanguagesContext from "../../contexts/languages-context";
import translations from "../../i18n/translations";

class NextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Test"
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.finalQuestion = this.finalQuestion.bind(this);
  }

  nextQuestion(selectedAnswer) {
    this.props.addUserInputToState(selectedAnswer);
    this.props.incrementQuizStep();
    this.props.checkScore();
  }

  finalQuestion(selectedAnswer) {
    this.props.addUserInputToState(selectedAnswer);
    this.props.stopTimer();
    this.props.incrementQuizStep();
    this.props.checkScore();
    this.props.postQuizResult();
  }

  render() {
    const {
      addUserInputToState,
      step,
      stopTimer,
      selectedAnswer,
      isVisible
    } = this.props;

    if (isVisible === true) return null;

    if (step < 9) {
      return (
        <LanguagesContext.Consumer>
          {({ currentLanguage }) => (
            <button
              type="submit"
              className="btnnext"
              onClick={() => {
                this.nextQuestion(selectedAnswer);
              }}
            >
              {translations[currentLanguage].NextButton.ButtonN}
            </button>
          )}
        </LanguagesContext.Consumer>
      );
    }
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <div>
            <button
              type="submit"
              className="btnresults"
              onClick={() => {
                this.finalQuestion(selectedAnswer);
              }}
            >
              {translations[currentLanguage].NextButton.ButtonR}
            </button>
          </div>
        )}
      </LanguagesContext.Consumer>
    );
  }
}
export default NextButton;
