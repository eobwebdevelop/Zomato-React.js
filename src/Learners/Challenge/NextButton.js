import React, { Component } from "react";

class NextButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Test"
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.finalQuestion = this.finalQuestion.bind(this);
  }

  nextQuestion(selectedAnswer) {
    this.props.addUserInputToState(selectedAnswer);
    this.props.checkScore();
    this.props.incrementQuizStep();
  }

  finalQuestion(selectedAnswer) {
    this.props.addUserInputToState(selectedAnswer);
    this.props.stopTimer();
    this.props.incrementQuizStep();
    this.props.postQuizResult();
  }

  render() {
    const { step, selectedAnswer, isVisible } = this.props;

    if (isVisible === true) return null;

    if (step < 9) {
      return (
        <>
          <button
            type="submit"
            className="btn"
            onClick={() => {
              this.nextQuestion(selectedAnswer);
            }}
          >
            Next
          </button>
        </>
      );
    }
    return (
      <>
        <button
          type="submit"
          className="btn"
          onClick={() => {
            this.finalQuestion(selectedAnswer);
          }}
        >
          See Results
        </button>
      </>
    );
  }
}
export default NextButton;
