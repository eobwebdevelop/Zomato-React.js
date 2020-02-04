import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import QandA from './QandA';
import './Challenge.css';
import ResultsCard from './ResultsCard';
// import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
// import translations from '../../i18n/translations';

class Challenge extends React.Component {
  componentDidMount() {
    this.props.startOverallTimer();
    this.props.addUserIDFromTokenToState();
  }

  render() {
    const {
      questionPackage,
      step,
      overallTime,
      onClickAnswer,
      addUserInputToState,
      quizIDInPlay,
      refreshQuizState,
      stopTimer,
      userQuizAnswers,
      checkScore,
      score,
      incrementQuizStep,
      postQuizResult
    } = this.props;

    const questionPackageSpecificQuizIDOnly = questionPackage.filter(
      el => el.id === quizIDInPlay
    )[0].questions;

    if (step < 10) {
      return (
        <Container>
          <h1>Quiz</h1>
          <hr />
          <div className="grayContainer">
            {questionPackageSpecificQuizIDOnly.map((questionPackage, i) => (
              <QandA
                questionPackage={questionPackageSpecificQuizIDOnly[i]}
                addUserInputToState={addUserInputToState}
                isVisible={step === i}
                onClickAnswer={onClickAnswer}
                stopTimer={stopTimer}
                incrementQuizStep={incrementQuizStep}
                step={i}
                overallTime={overallTime}
                quizIDInPlay={quizIDInPlay}
                checkScore={checkScore}
                postQuizResult={postQuizResult}
              />
            ))}
            <h3>
              Current Time:
              {" " + overallTime} seconds
            </h3>
          </div>
        </Container>
      );
    }
    return (
      <Container>
        <h1>Results</h1>
        <hr />
        <h2>You scored {" " + score} out of 10! 🎉</h2>
        <h3>
          Your total time was
          {" " + overallTime} seconds.
        </h3>

        <h3>
          {userQuizAnswers.map((answerInput, i) => (
            <ResultsCard
              key={i}
              correctAnswerID={answerInput.correctAnswerID}
              correctAnswerText={answerInput.correctAnswerText}
              questionNumber={answerInput.questionNumber}
              questionText={answerInput.questionText}
              userAnswerText={answerInput.userAnswerText}
              userAnswerID={answerInput.userAnswerID}
            />
          ))}
        </h3>

        <Link to="/learners/quiz_list">
          <button class="btn" onClick={refreshQuizState}>
            Home
          </button>
        </Link>

        <Link to="/learners/documentation">
          <button class="btn" onClick={refreshQuizState}>
            Documentation
          </button>
        </Link>
      </Container>
    );
  }
}
export default Challenge;
