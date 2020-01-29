import React from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminQuizList = ({ quizzes, onDelete }) => (
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
      <table className="tftable" border="1">
        <tr>
          <th>Quiz id</th>
          <th>First Name</th>
          <th>Edit Quiz</th>
          <th>Delete Quiz</th>
        </tr>
        {quizzes.map((quiz) => (
          <tr>
            <td>{quiz.id}</td>
            <td>{quiz.name}</td>
            <td>
              <Link to={`/admin/quiz_editor/${quiz.id}`} params={quiz.id}>
                <button type="submit" className="btn-list">
                        Edit Quiz ►
                </button>
              </Link>
            </td>
            <td>
              <button
                type="submit"
                className="btn-list"
                onClick={() => onDelete(quiz.id)}
              >
                        Delete Quiz ►
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  </div>
);
AdminQuizList.propTypes = {
  quizzes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default AdminQuizList;
