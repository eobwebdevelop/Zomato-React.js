import React, { Component } from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import {
  Link, withRouter, useHistory, Redirect,
} from 'react-router-dom';


class AdminQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleEditQuestionser = id => {
    this.handleDelete(id, "question", () => {
      const updatedUsers = this.state.users.filter(user => user.id !== id);
      this.setState({ users: updatedUsers });
    });
  };

  render() {
    const { quiz } = this.props;
    return (
      <div>
        <Container>
          {quiz.map((quest) => (    
          <div className='row'>
            <div key={quest.id} className='col'>
                {quest.question} 
                {/* <Link to={`/Admin/AdminQuizEditor/${id}/${quest.id}`}>
                <button type="submit" className="btn-list">
                    Edit Quiz ►
                </button>
                {' '}
              </Link> */}
              </div>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}
export default AdminQuiz;
