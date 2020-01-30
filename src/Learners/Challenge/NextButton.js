import React from 'react';
// import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
// import translations from '../../i18n/translations';


class NextButton extends React.Component {
  render() {
    const {
      onNextStep,
      step,
      stopTimer,
      selectedAnswer,
      isVisible,
      checkScore,
    } = this.props;

    if (isVisible === true) return null;

    if (step < 9) {
      return (
        <>
          <button
            type="submit"
            className="btn"
            onClick={() => {
              onNextStep(selectedAnswer);
            }}
          >
            Next
          </button>
        </>
      );
    }
    return (
      <>
        <button
          type="submit"
          className="btn"
          onClick={() => {
            stopTimer();
            onNextStep(selectedAnswer);
            checkScore();
          }}
        >
            See results
        </button>
      </>
    );
  }
}
export default NextButton;
