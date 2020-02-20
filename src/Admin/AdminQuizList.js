import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import AdminQuiz from './AdminQuiz';
import QuizzesContext from '../contexts/quiz-context';

const AdminQuizList = ({ onDelete, onQuizfound }) => {
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
            <div className="col-8 padding">
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
            <div className="col" id="color" align="center">
              <div className="row">
                <div className="col-6 redborder" align="center">
                  <button
                    type="submit"
                    className="btn-list btn-admin"
                    onClick={() => { if (window.confirm('Are you sure you wish to delete this quiz?')) { onDelete(q.id); } }}
                  >
                    Delete Quiz ►
                  </button>
                </div>
                <div className="col"  align="center">
                    <Link to={`/admin/quiz_editor/${q.id}`}>
                      <button
                        type="submit"
                        className="btn-list btn-admin"
                        onClick={() => (onQuizfound(q.id))}
                      >
                        Edit Quiz Name ►
                      </button>
                    </Link>
                </div>
              </div>
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
