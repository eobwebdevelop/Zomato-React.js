import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import NextButton from './NextButton';
import AnswerButton from './AnswerButton';


class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: {},
      selectedAnswerNumber: {},
    };
    this.answerSelect = this.answerSelect.bind(this);
  }

  answerSelect(userInput) {
    this.setState(() => ({
      selectedAnswer: userInput,
      selectedAnswerNumber: userInput.answerNumber,
    }));
  }

  render() {
    const {
      questionPackage,
      step,
      addUserInputToState,
      isVisible,
      stopTimer,
      quizIDInPlay,
      checkScore,
      incrementQuizStep,
      postQuizResult,
      overallTime,
    } = this.props;

    if (!isVisible) return null;

    return (
      <>
        <div className="questionTitleContainer">
          <h1 id="questiontitle">{questionPackage.question}</h1>
        </div>

        <div className="answerscontainer">
          {questionPackage.answers.map((answer, i) => (
            <div className="answercontainer">
              <AnswerButton
                answerNumber={i}
                questionText={questionPackage.question}
                correctAnswerID={questionPackage.correct_answer_id}
                correctAnswerText={
                  questionPackage.answers[questionPackage.correct_answer_id - 1]
                    .answer_option
                }
                answerText={answer.answer_option}
                answerID={answer.id}
                step={step}
                quizIDinPlay={quizIDInPlay}
                answerSelect={this.answerSelect}
                styleHighlight={
                  i === this.state.selectedAnswerNumber
                    ? 'activeAnswer'
                    : 'inactiveAnswer'
                }
              />
              {' '}
            </div>
          ))}
        </div>

        <div className="grid-quizfooter">
          <div className="grid1-progress">
            <Line
              percent={step * 10}
              strokeWidth="2.5"
              strokeColor="#ee556a"
              strokeLinecap="square"
              trailColor="#f8f8f8"
              trailWidth="1.5"
            />
          </div>
          <div className="grid1-timeandquestionnumber">
            <h3>
              <span className="question-number">
                Q
                {step + 1}
                {' '}
                {'      '}
                {' '}
              </span>
              <span className="quiz-time">
                {moment.utc(overallTime * 1000).format('mm:ss')}
              </span>
            </h3>
          </div>
          <div className="grid1-previousbutton"> </div>
          <div className="grid1-nextbutton">
            <NextButton
              addUserInputToState={addUserInputToState}
              step={step}
              stopTimer={stopTimer}
              selectedAnswer={this.state.selectedAnswer}
              isVisible={this.state.selectedAnswer.userAnswerID === undefined}
              checkScore={checkScore}
              incrementQuizStep={incrementQuizStep}
              postQuizResult={postQuizResult}
            />
          </div>
        </div>
      </>
    );
  }
}
QandA.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  questionPackage: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  addUserInputToState: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  quizIDInPlay: PropTypes.number.isRequired,
  checkScore: PropTypes.func.isRequired,
  incrementQuizStep: PropTypes.func.isRequired,
  postQuizResult: PropTypes.func.isRequired,
  overallTime: PropTypes.number.isRequired,
};

export default QandA;
