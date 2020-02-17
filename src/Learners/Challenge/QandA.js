import React from "react";
import NextButton from "./NextButton";
import AnswerButton from "./AnswerButton";
import BackButton from "./BackButton";
import moment from "moment";
import { Line } from "rc-progress";

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: {},
      selectedAnswerNumber: {}
    };
    this.answerSelect = this.answerSelect.bind(this);
  }

  answerSelect(userInput) {
    this.setState(state => ({
      selectedAnswer: userInput,
      selectedAnswerNumber: userInput.answerNumber
    }));
  }

  render() {
    const {
      questionPackage,
      step,
      onClickAnswer,
      addUserInputToState,
      isVisible,
      stopTimer,
      quizIDInPlay,
      checkScore,
      incrementQuizStep,
      reduceQuizStep,
      postQuizResult,
      overallTime
    } = this.props;


    if (!isVisible) return null;

    return (
      <>
        <div class="questionTitleContainer">
          <h1 id="questiontitle">{questionPackage.question}</h1>
        </div>

        <div class="answerscontainer">
          {questionPackage.answers.map((answer, i) => (
            <div class="answercontainer">
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
                    ? "activeAnswer"
                    : "inactiveAnswer"
                }
              />{" "}
            </div>
          ))}
        </div>

        <div class="grid-quizfooter">
          <div class="grid1-progress">
            <Line
              percent={step * 10}
              strokeWidth="2.5"
              strokeColor="#E03A48"
              strokeLinecap="square"
              trailColor="#D9D9D9"
              trailWidth="2.5"
            />
          </div>
          <div class="grid1-timeandquestionnumber">
            <h3>
              <span class="question-number">
                Q{step + 1} {"      "}{" "}
              </span>
              <span class="quiz-time">
                {moment.utc(overallTime * 1000).format("mm:ss")}
              </span>
            </h3>
          </div>
          <div class="grid1-previousbutton"> </div>
          <div class="grid1-nextbutton">
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
export default QandA;
