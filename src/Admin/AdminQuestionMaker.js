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
    const {question, correct_answer, answer_options} = this.state
    const {quiz_id} = this.props
    const answer_option_sending = answer_options.map((a, index) => a.answer_option_index)
    console.log(answer_option_sending)
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/question/create`,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
         body:  JSON.stringify({question, quiz_id, answer_options, correct_answer}),
    })
  }

  updateAnswer = (event) => {
    const { name, value } = event.target
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
  

  updateQuestion = (event) => {
    this.setState({
      question: event.target.value
    });
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <Container>
          <form onSubmit={this.handleSubmit}>
            New question: 
            <input type="text"  value={this.state.question} onChange={this.updateQuestion}/>
            <div className="col-sm">
              Answer Option:
              <br />
              Answer 1:
              <br />
              <textarea className="answeroption"
                type="text"
                name="answer_option"
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
