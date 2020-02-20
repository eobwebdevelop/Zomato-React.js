import React from 'react';

class AnswerButton extends React.Component {
  render() {
    const {
      questionText,
      answerID,
      answerText,
      step,
      quizIDinPlay,
      answerSelect,
      correctAnswerID,
      correctAnswerText,
      styleHighlight,
      answerNumber,
    } = this.props;

    const userInput = {
      quiz_ID: quizIDinPlay,
      questionNumber: step + 1,
      questionText,
      userAnswerID: answerID,
      userAnswerText: answerText,
      correctAnswerID,
      correctAnswerText,
      answerNumber,
    };

    return (
      <>
        <br />
        <div className={styleHighlight}>
          <button
            className="answerButton"
            onClick={() => answerSelect(userInput)}
          >
            {answerText}
          </button>
        </div>
        <br />
      </>
    );
  }
}
export default AnswerButton;
