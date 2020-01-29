import React from 'react';
import NextButton from "./NextButton";


class QandA extends React.Component {
  render() {
    const {
      questionPackage,
      step,
      onClickAnswer,
      onNextStep,
      isVisible,
      stopTimer,
      overallTime
    } = this.props;

    if (!isVisible) return null;

    return (
      <>
        <h1>
          Question Text:
          {questionPackage.question}
        </h1>
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
        <NextButton onNextStep={onNextStep} step={step} stopTimer={stopTimer} />
      </>
    );
  }
}
export default QandA;
