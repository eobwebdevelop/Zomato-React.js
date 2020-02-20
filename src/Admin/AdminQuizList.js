import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import AdminQuiz from './AdminQuiz';
import QuizzesContext from '../contexts/quiz-context';

const AdminQuizList = ({ onDelete }) => {
  const { quizzes, quizzesAreLoaded } = React.useContext(
    QuizzesContext,
  );
  if (!quizzesAreLoaded) {
    return <p>Please wait loading... </p>;
  }
  return (
    <div>
      <Container>
        <h1>Manage Quizzes</h1>
        <hr />
        <p>You are viewing all the available Quizzes at the current moment.</p>
        <Link to="/admin/quiz_maker">
          <button type="submit" className="btn">
            Add Quiz
          </button>
        </Link>

        {quizzes.map((q) => (
          <section key={q.id} className="row">
            <div className="col-8">
              <Collapsible
                trigger={`${q.name} ►`}
                triggerClassName="CustomTriggerCSS"
                triggerOpenedClassName="CustomTriggerCSS--open"
                contentOuterClassName="CustomOuterContentCSS"
                contentInnerClassName="CustomInnerContentCSS"
              >
                <AdminQuiz quiz={q.questions} editid={q.id} />
              </Collapsible>
            </div>
            <div className="col">
              <button
                type="submit"
                className="btn-list"
                onClick={() => { if (window.confirm('Are you sure you wish to delete this quiz?')) { onDelete(q.id); } }}
              >
                Delete Quiz ►
              </button>
              {/* <Link to={`/admin/quiz_editor/${q.id}`}>
                <button
                  type="submit"
                  className="btn-list"
                >
                  Edit Quiz Name ►
                </button>
              </Link> */}
            </div>
          </section>
        ))}
      </Container>
    </div>
  );
};

AdminQuizList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default AdminQuizList;
