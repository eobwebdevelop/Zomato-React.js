import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';

class AdminQuestionMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (e) => {
    const {question_id, } = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/quiz/create`,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify(question,quiz_id, 
          answers_options:[
            this.state.answer_option_1,
            this.state.answer_option_2,
            this.state.answer_option_3,
            this.state.answer_option_4
            ],
          this.state.correct_answer
        ),
    })
  }

  updateChecked = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateAnswer = (event) => {
    this.setState({
      correct_answer: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <Container>
          <form onSubmit={this.handleSubmit}>
            New question: 
            <input type="text" name="question" />
            <div className="col-sm">
              Answer Option:
              <br />
              Answer 1:
              <br />
              <textarea
                type="text"
                name="ans"
                value={this.state.answer_2}
                on
              />
              <div className="row">
              <input
              type="checkbox"
              name="correctanswer"
              value={this.state.answer_option_1}
              onClick={this.updateChecked()
              }
               />
              </div>
              Answer 2:
              <br />
              <textarea
                type="text"
                name="ans"
                value={this.state.answer_option_2}
              />
               <div className="row">
                Correct Answer?
                <input
              type="checkbox"
              name="correctanswer"
              value={this.state.answer_option_2}
              onClick={this.updateChecked()}
               />
              </div>
              Answer 3:
              <br />
              <textarea
                type="text"
                name="ans"
                value={this.state.answer_option_3}
                onChange={this.updateAnswer}
              />
              <div className="row">
                Correct Answer?
                <input
              type="checkbox"
              name="correctanswer"
              value={this.state.answer_option_3}
              onClick={this.updateChecked()} />
              </div>
              Answer 4:
              <br />
              <textarea
                type="text"
                name="ans"
                value={this.state.answer_option_4}
              />
              <div className="row">
                Correct Answer?
                <input
              type="checkbox"
              name="correctanswer"
              value={this.state.answer_option_4}
              onClick={this.updateChecked()} />
              </div>
            </div>
            <button type="submit"> 
            Save Question
            </button>
          </form>
        </Container>
      </div>
    );
  }
}


export default AdminQuestionMaker;
