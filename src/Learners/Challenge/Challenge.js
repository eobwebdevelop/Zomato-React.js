import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import QandA from "./QandA";

// class Challenge extends React.Component {
//   render() {
//     //
//   }

// return (
//   <div>
//
//   </div>
// );
// export default Challenge;

class Challenge extends React.Component {

  componentDidMount() {
    this.props.startOverallTimer();
    // console.log("started timer");
  }

  render() {
    const {
      questionPackage,
      step,
      overallTime,
      onClickAnswer,
      onNextStep,
      quizIDInPlay,
      refreshQuizState,
      stopTimer
    } = this.props;

    // console.log(questionPackage);

    const questionPackageSpecificQuizIDOnly = questionPackage.filter(
      el => el.id === quizIDInPlay
    )[0].questions;

    if (step < 10) {
      return (
        <Container>
          <h1>Quiz</h1>
          <hr />
          {questionPackageSpecificQuizIDOnly.map((questionPackage, i) => (
            <QandA
              questionPackage={questionPackageSpecificQuizIDOnly[i]}
              onNextStep={onNextStep}
              isVisible={step === i}
              onClickAnswer={onClickAnswer}
              stopTimer={stopTimer}
              step={i}
              overallTime={overallTime}
            />
          ))}
          <h3>Current Time: {overallTime} seconds</h3>
        </Container>
      );
    }
    return (
      <Container>
        <h1>Results</h1>
        <hr />
        <h2>Your total time was {overallTime} seconds.</h2>
        <p>Present question by question results here</p>

        <Link to="/Learners/QuizList/QuizList">
          <a>
            <button onClick={refreshQuizState}>Home</button>
          </a>
        </Link>

        <Link to="/Learners/Documentation/Documentation">
          <a>
            <button onClick={refreshQuizState}>Documentation</button>
          </a>
        </Link>
      </Container>
    );
  }
}
export default Challenge;
