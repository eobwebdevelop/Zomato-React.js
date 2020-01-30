import React from "react";

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
        <button onClick={() => answerSelect(userInput)}>{answerText}</button>
        <br />
      </>
    );
  }
}
export default AnswerButton;
