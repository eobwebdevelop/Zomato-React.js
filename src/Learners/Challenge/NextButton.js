import React from "react";


class NextButton extends React.Component {
  render() {
    const { onNextStep, step, stopTimer } = this.props;

    if (step < 9) {
      return (
        <>
          <button type="submit" className="btn" onClick={onNextStep}>
            Next
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            type="submit"
            className="btn"
            onClick={() => {
              stopTimer();
              onNextStep();
            }}
          >
            See results
          </button>
        </>
      );
    }
  }
}
export default NextButton;
