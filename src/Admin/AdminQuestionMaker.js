import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';

class AdminQuestionMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer_options:[],
    };
  }

  handleSubmit = (e) => {
    const {question, correct_answer, answers_options} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/question/create`,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
         body:  JSON.stringify(question, correct_answer, answers_options),
    })
  }

  updateAnswer = (event) => {
    const { name, value } = event.target
    console.log(name, value)
     this.setState(prevState => ({
        answer_options: {
          ...prevState.answer_options,
          [name]: value,
        }
     })
    )
  }

  updateCorrectAns = (event) => {
    this.setState({
      correct_answer: event.target.value
    });
  }
  
  render() {
    console.log(this.state)
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
              <textarea className="answeroption"
                type="text"
                name="answer_option_1"
                value={this.state.answer_options.answer_option_1}
                onChange={this.updateAnswer}
              />
              <div className="row">
              <input
              type="checkbox"
              name="correctanswer"
              value={this.state.answer_options.answer_option_1}
              onClick={this.updateCorrectAns}
               />
              </div>
              Answer 2:
              <br />
              <textarea className="answeroption"
                type="text"
                name="answer_option_2"
                value={this.state.answer_options.answer_option_2}
                onChange={this.updateAnswer}
              />
               <div className="row">
                Correct Answer?
                <input 
              type="checkbox"
              name="correctanswer"
              value={this.state.answer_options.answer_option_2}
              onClick={this.updateCorrectAns}
               />
              </div>
              Answer 3:
              <br />
              <textarea className="answeroption"
                type="text"
                name="answer_option_3"
                value={this.state.answer_options.answer_option_3}
                onChange={this.updateAnswer}
              />
              <div className="row">
                Correct Answer?
                <input
              type="checkbox"
              name="correctanswer"
              value={this.state.answer_options.answer_option_3}
              onClick={this.updateCorrectAns} />
              </div>
              Answer 4:
              <br />
              <textarea className="answeroption"
                type="text"
                name="answer_option_4"
                value={this.state.answer_options.answer_option_4}
                onChange={this.updateAnswer}
              />
              <div className="row">
                Correct Answer?
                <input
              type="checkbox"
              name="correctanswer"
              value={this.state.answer_options.answer_option_4}
              onClick={this.updateCorrectAns} />
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
