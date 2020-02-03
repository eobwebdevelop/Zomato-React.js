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
      correctAnswerText
    } = this.props;

    const userInput = {
      quiz_ID: quizIDinPlay,
      questionNumber: step + 1,
      questionText: questionText,
      userAnswerID: answerID,
      userAnswerText: answerText,
      correctAnswerID: correctAnswerID,
      correctAnswerText: correctAnswerText
    };

    return (
      <>
     <br />
      <div className="separator">
        <button className="answerButton" onClick={() => answerSelect(userInput)}>{answerText}</button>
      </div>
        <br />
      </>
    );
  }
}
export default AnswerButton;
