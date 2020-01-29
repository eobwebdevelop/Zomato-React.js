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
          // return history.push('/Admin/AdminQuizList');
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
                  <Link to={`/Admin/AdminQuizEditor/${quiz.id}`} params={quiz.id}>
                    <button type="submit" className="btn-list">
                        Edit Quiz ►
                    </button>
                  </Link>
                </td>
                <td>
                    <button 
                      type="submit" 
                      className="btn-list"
                      onClick={ ()=> this.deleteQuiz(quiz.id)}
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
  }
}
export default withRouter(AdminQuizList);
