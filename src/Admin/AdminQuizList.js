import React, { Component } from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link, withRouter, useHistory, Redirect} from 'react-router-dom';

class AdminQuizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  deleteQuiz = (id) => {
    fetch(process.env.REACT_APP_PATH_ADMIN_QUIZ_DELETE,
      {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          id,
        }),
      })
      .then((res) => {
        res.json();
        if (res.status === 200) {
          console.log('hey');
          // return history.push('/admin/quiz_list');
        }
      });
  };

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
          <Link to="/admin/quiz_creator">
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
                    <Link to={`/admin/admin_question_list/${quiz.id}`}>
                      <button type="submit" className="btn-list">
                        Show More ►
                      </button>
                      {' '}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/admin_quiz_delete/${quiz.id}`}>
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
export default withRouter(AdminQuizList);
