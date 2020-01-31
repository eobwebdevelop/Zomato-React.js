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

  handleQuestion = ()=> {

  }

  render() {
    const { quiz } = this.props;
    return (
      <div>
        <Container>
          {quiz.map((quest) => (    
          <div className='row'>
            <div key={quest.id} className='col'>
                {quest.question}
                <button onClick={this.handleQuestion}>
                  Edit Question
                </button>
              </div>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}
export default AdminQuiz;
