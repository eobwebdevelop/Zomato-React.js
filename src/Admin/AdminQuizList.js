import React from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import AdminQuiz from './AdminQuiz';
import QuizzesContext from '../contexts/quiz-context';


const AdminQuizList = ({ onDelete }) => {
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
        <Link to="/admin/quiz_maker">
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
            <button
              type="submit"
              className="btn-list"
              onClick={() => onDelete(q.id)}
            >
              Delete Quiz ►
            </button>
          </section>
        ))}
      </Container>
    </div>
  );
};
// AdminQuizList.propTypes = {
//   // quizzes: PropTypes.arrayOf(
//   //   PropTypes.shape({
//   //     id: PropTypes.number.isRequired,
//   //     name: PropTypes.string.isRequired,
//   //   }).isRequired,
//   // ).isRequired,
//   onDelete: PropTypes.func.isRequired,
// };


export default AdminQuizList;
