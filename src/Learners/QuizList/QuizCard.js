import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { Container } from "react-bootstrap";

class QuizCard extends React.Component {
  render() {
    const {
      quizTitle,
      quizDescription,
      QuizLinkText,
      DocumentationLinkText,
      quizID,
      changeQuizIDInPlay,
    } = this.props;

    return (
      <>
        <h2>{quizTitle}</h2>

        <Link
          to="/learners/quiz_list/quiz"
          className="view-quizzes-page-links-side-by-side"
          onClick={() => changeQuizIDInPlay(quizID)}
        >
          {QuizLinkText}
Take Quiz
          <br />
        </Link>
        <Link to="/learners/documentation" className="cranberry-link">
          {DocumentationLinkText}
Read Documentation
        </Link>
      </>
    );
  }
}
export default QuizCard;
