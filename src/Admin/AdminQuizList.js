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
            <thead>
              <tr>
                <th>Quiz id</th>
                <th>First Name</th>
                <th>Edit Quiz</th>
                <th>Delete Quiz</th>
              </tr>
            </thead>
            {quizzes.map((quiz) => (
              <tbody key={quiz.id}>
                <tr>
                  <td>{quiz.id}</td>
                  <td>{quiz.name}</td>
                  <td>
                    <Link to={`/Admin/AdminQuestionList/${quiz.id}`}>
                      <button type="submit" className="btn-list">
                        Show More ►
                      </button>
                      {' '}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/Admin/AdminQuizDelete/${quiz.id}`}>
                      <button type="submit" className="btn-list">
                        Delete Quiz ►
                      </button>
                      {' '}
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </Container>
      </div>
    );
  }
}
export default AdminQuizList;
