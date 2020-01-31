import React from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import AdminQuiz from './AdminQuiz';
import QuizzesContext from '../contexts/quiz-context';


const AdminQuizList = () => {
  const { quizzes, onLoadQuizzes, quizzesAreLoaded } = React.useContext(QuizzesContext);
  if (!quizzesAreLoaded) {
    return <p>Please wait loading... </p>;
  }
  return (
    <div>
      <Container>
        <h1>Manage Quizzes</h1>
        <hr />
        <p>
        You are viewing all the available Quizzes at the current moment.
        </p>
        <Link to="/Admin/AdminQuizCreator">
          <button type="submit" className="btn">
          Add Quiz
          </button>
        </Link>
        <Link to="/">
          <button type="submit" className="btn">
          Export Data
          </button>
        </Link>
        {quizzes.map((q) => (
          <section key={q.id}>
            <Collapsible trigger={q.name}>
              <AdminQuiz
                quiz={q.questions}
              />
            </Collapsible>
            <Link to={`/Admin/AdminQuizDelete/${q.id}`}>
              <button type="submit" className="btn-list">
                      Delete Quiz ►
              </button>
              {' '}
            </Link>
          </section>
        ))}
      </Container>
    </div>
  );
};

export default AdminQuizList;
