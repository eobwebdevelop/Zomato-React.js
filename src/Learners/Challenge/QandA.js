import React from "react";
import NextButton from "./NextButton";
import AnswerButton from "./AnswerButton";
import BackButton from "./BackButton";

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
      postQuizResult
    } = this.props;

    console.log(this.state.selectedAnswer);

    if (!isVisible) return null;

    return (
      <>
        <BackButton
          reduceQuizStep={reduceQuizStep}
          isBackButtonShown={step > 0 ? "show" : "don't show"}
        />

        <h1>
          Q{step + 1}: {questionPackage.question}
        </h1>

        {questionPackage.answers.map((answer, i) => (
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
          />
        ))}

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
      </>
    );
  }
}
export default QandA;
