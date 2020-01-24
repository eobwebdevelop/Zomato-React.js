import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

class QandA extends React.Component {
  render() {
    const {
      i,
      questionPackage,
      step,
      onClickAnswer,
      onNextStep,
      isVisible
    } = this.props;

    if (!isVisible) return null;

    return (
      <>
        <h1>Question Text: {questionPackage.question}</h1>
        <ul>
          <li>
            <p>{questionPackage.answers[0].answer_option}</p>
          </li>
          <li>
            {" "}
            <p>{questionPackage.answers[1].answer_option}</p>
          </li>
          <li>
            <p>{questionPackage.answers[2].answer_option}</p>
          </li>
          <li>
            <p>{questionPackage.answers[3].answer_option}</p>
          </li>
        </ul>
        <button type="submit" className="btn" onClick={onNextStep}>
          Next
        </button>
      </>
    );
  }
}
export default QandA;
