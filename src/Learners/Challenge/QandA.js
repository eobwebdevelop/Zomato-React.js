import React from 'react';
import NextButton from './NextButton';
import AnswerButton from './AnswerButton';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: {},
    };
    this.answerSelect = this.answerSelect.bind(this);
  }

  answerSelect(userInput) {
    this.setState((state) => ({
      ...state,
      selectedAnswer: userInput,
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
    } = this.props;

    // Uncomment this to see the question being rendered
    // console.log(questionPackage);

    if (!isVisible) return null;

    return (
      <>
        <h1>
          Q
          {step + 1}
:
          {' '}
          {questionPackage.question}
        </h1>

        {questionPackage.answers.map((answer, i) => (
          <AnswerButton
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
        />
      </>
    );
  }
}
export default QandA;
