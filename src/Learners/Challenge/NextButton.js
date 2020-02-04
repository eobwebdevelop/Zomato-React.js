import React, { Component } from 'react';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';

class NextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'Test',
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.finalQuestion = this.finalQuestion.bind(this);
  }

  nextQuestion(selectedAnswer) {
    this.props.addUserInputToState(selectedAnswer);
    this.props.checkScore();
    this.props.incrementQuizStep();
  }

  finalQuestion(selectedAnswer) {
    this.props.addUserInputToState(selectedAnswer);
    this.props.stopTimer();
    this.props.incrementQuizStep();
    this.props.postQuizResult();
  }

  render() {
    const {
      addUserInputToState,
      step,
      stopTimer,
      selectedAnswer,
      isVisible,
    } = this.props;

    if (isVisible === true) return null;

    if (step < 9) {
      return (
        <LanguagesContext.Consumer>
          {({ currentLanguage }) => (
            <div>
              <button
                type="submit"
                className="btn"
                onClick={() => {
                  this.nextQuestion(selectedAnswer);
                }}
              >
                {translations[currentLanguage].NextButton.ButtonN}
              </button>
            </div>
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
              className="btn"
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
