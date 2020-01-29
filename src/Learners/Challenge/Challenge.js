import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import QandA from "./QandA";
import ResultsCard from "./ResultsCard";

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
      stopTimer,
      userQuizAnswers,
      checkScore,
      score
    } = this.props;

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
              quizIDInPlay={quizIDInPlay}
              checkScore={checkScore}
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
        <h2>You scored {score} out of 10! 🎉</h2>
        <h3>Your total time was {overallTime} seconds.</h3>

        <h3>
          {userQuizAnswers.map((answerInput, i) => (
            <ResultsCard
              correctAnswerID={answerInput.correctAnswerID}
              correctAnswerText={answerInput.correctAnswerText}
              questionNumber={answerInput.questionNumber}
              questionText={answerInput.questionText}
              userAnswerText={answerInput.userAnswerText}
              userAnswerID={answerInput.userAnswerID}
            />
          ))}
        </h3>

        <Link to="/learners/quiz_list/quiz_list">
          <a>
            <button onClick={refreshQuizState}>Home</button>
          </a>
        </Link>

        <Link to="/learners/documentation/documentation">
          <a>
            <button onClick={refreshQuizState}>Documentation</button>
          </a>
        </Link>
      </Container>
    );
  }
}
export default Challenge;
