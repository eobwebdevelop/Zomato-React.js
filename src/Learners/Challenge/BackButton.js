import React from "react";

class BackButton extends React.Component {
  render() {
    console.log(this.props.isBackButtonShown);
    const { reduceQuizStep, isBackButtonShown } = this.props;

    if (isBackButtonShown === "show") {
      return (
        <>
          <button class="back-button-quiz" onClick={() => reduceQuizStep()}>
            &#8592; Previous Question
          </button>
          ;
        </>
      );
    } else return null;
  }
}
export default BackButton;
