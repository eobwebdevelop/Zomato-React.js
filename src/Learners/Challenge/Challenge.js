import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import QandA from './QandA';
import './Challenge.css';
import ResultsCard from './ResultsCard';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';

class Challenge extends Component {
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
      addUserInputToState,
      quizIDInPlay,
      refreshQuizState,
      stopTimer,
      userQuizAnswers,
      checkScore,
      score,
      incrementQuizStep,
    } = this.props;

    const questionPackageSpecificQuizIDOnly = questionPackage.filter(
      (el) => el.id === quizIDInPlay,
    )[0].questions;

    if (step < 10) {
      return (
        <LanguagesContext.Consumer>
          {({ currentLanguage }) => (
            <Container>
              <h1>{translations[currentLanguage].Challenge.TitleQ}</h1>
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
                  />
                ))}
                <h3>
                  {translations[currentLanguage].Challenge.CurrentT}
                  {` ${overallTime}`}
                  {' '}
                  {translations[currentLanguage].Challenge.TimeSec}
                </h3>
              </div>
            </Container>
          )}
        </LanguagesContext.Consumer>
      );
    }
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <Container>
            <h1>{translations[currentLanguage].Challenge.TitleR}</h1>
            <hr />
            <h2>
              {translations[currentLanguage].Challenge.ScoreA}
              {` ${score}`}
              {' '}
              {translations[currentLanguage].Challenge.ScoreB}
            </h2>
            <h3>
              {translations[currentLanguage].Challenge.TimeA}
              {` ${overallTime}`}
              {' '}
              {translations[currentLanguage].Challenge.TimeB}
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
              <button className="btn" onClick={refreshQuizState}>
                {translations[currentLanguage].Challenge.ButtonH}
              </button>
            </Link>

            <Link to="/learners/documentation">
              <button className="btn" onClick={refreshQuizState}>
              {translations[currentLanguage].Challenge.ButtonD}
              </button>
            </Link>
          </Container>
        )}
      </LanguagesContext.Consumer>
    );
  }
}
export default Challenge;
