import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class ResultsCard extends React.Component {
  render() {
    const {
      correctAnswerID,
      correctAnswerText,
      questionNumber,
      questionText,
      userAnswerText,
      userAnswerID,
    } = this.props;

    if (userAnswerID === correctAnswerID) {
      return (
        <>
          <h1>
            Question
            {' '}
            {questionNumber}
:
            {' '}
            {questionText}
          </h1>
          <h2>Correct ✅</h2>
          <p>
Your answer:
            {userAnswerText}
          </p>
        </>
      );
    }
    return (
      <>
        <h1>
            Question
          {' '}
          {questionNumber}
:
          {' '}
          {questionText}
        </h1>
        <h2>Incorrect ❌</h2>
        <p>
Your answer:
          {userAnswerText}
        </p>
        <p>
The correct answer:
          {correctAnswerText}
        </p>
      </>
    );
  }
}
export default ResultsCard;
