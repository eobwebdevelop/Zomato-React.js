import React from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import AdminAnswerEditor from './AdminAnswerEditor';
import QuizzesContext from '../contexts/quiz-context';


const AdminQuestionEditor = (props) => {
  const { quizzes, quizzesAreLoaded } = React.useContext(QuizzesContext);
  if (!quizzesAreLoaded) {
    return <p>Please wait loading... </p>;
  }
  const quizfound = quizzes.find((quiz) => quiz.id === +props.match.params.id);
  const questionfound = quizfound.questions.find((question) => question.id === +props.match.params.qid);
  return (
    <div>
      <Container>
        <h1>Edit Question</h1>
        <hr />
        <p>
            You are editing a question in
          {' '}
          {quizfound.name}
        </p>
        <form>
          <div className="Question-Edit">
            <div className="Question-Edit-Inner">
              <h2>
                Question
                {' '}
                {questionfound.id}
              </h2>
              <input type="text" name="quizname" value={questionfound.question} />
              <AdminAnswerEditor
                answers={questionfound.answers}
              />
            </div>
          </div>
        </form>
        <Link to="/admin/quiz_list">
          <button type="submit" className="btn">
                Save Question
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default withRouter(AdminQuestionEditor);
