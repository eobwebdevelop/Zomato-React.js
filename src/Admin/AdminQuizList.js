import React, { Component } from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminQuizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { quizzes } = this.props;
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
                  <a
                    className="view-quizzes-page-links-side-by-side"
                    href={`/Admin/AdminQuizEditor/${quiz.id}`}
                  >
                    {' '}
                    Edit Quiz ►
                    {' '}
                  </a>
                </td>
                <td>
                  <a
                    className="view-quizzes-page-links-side-by-side"
                    href={`/Admin/AdminQuizDelete/${quiz.id}`}
                  >
                    {' '}
                    Delete Quiz ►
                    {' '}
                  </a>
                </td>
              </tr>
            ))}
          </table>
        </Container>
      </div>
    );
  }
}
export default AdminQuizList;
