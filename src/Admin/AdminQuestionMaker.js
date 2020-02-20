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
    e.preventDefault();
    
    const {question, correct_answer, answer_options} = this.state
    const {quiz_id} = this.props
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
    return (
      <div>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <hr ></hr>
            New question: 
            <input type="text"  value={this.state.question} onChange={this.updateQuestion}/>
              Fill in the answer options: 
              <div className="row">
                <br />
                Answer 1:
                <br />
                <div className="col-10">
                  <textarea className="answerOption"
                    type="text"
                    name="answer_option_1"
                    value={this.state.answer_options.answer_option_1}
                    onChange={this.updateAnswer}
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <input
                      type="radio"  
                      id="correctAns"
                      className="answerTick"
                      name="correctanswer"
                      value={this.state.answer_options.answer_option_1}
                      onClick={this.updateCorrectAns}
                        />
                    </div>
                    <div className="col-11">
                      <label for="correctAns" className="labelQuiz"> Correct Answer? </label>
                    </div>
                </div>
              </div>
            </div>
              <div className="row">
              Answer 2:
              <br />
              <div className="col-10">
                <textarea className="answerOption"
                  type="text"
                  name="answer_option_2"
                  value={this.state.answer_options.answer_option_2}
                  onChange={this.updateAnswer}
                />
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <input
                      type="radio"  
                      id="correctAns"
                      className="answerTick"
                      name="correctanswer"
                      value={this.state.answer_options.answer_option_2}
                      onClick={this.updateCorrectAns}
                    />
                  </div>
                  <div className="col-11">
                   <label for="correctAns" className="labelQuiz"> Correct Answer? </label>
                  </div>
                </div>
              </div>
            </div>
              <div className="row">
                Answer 3:
                <div className="col-10">
                  <textarea className="answerOption"
                    type="text"
                    name="answer_option_3"
                    value={this.state.answer_options.answer_option_3}
                    onChange={this.updateAnswer}
                  />
                </div>
                <div className="col">
                <div className="row">
                  <div className="col">
                  <input
                    id="correctAns"
                    type="radio"  
                    className="answerTick"
                    name="correctanswer"
                    value={this.state.answer_options.answer_option_3}
                    onClick={this.updateCorrectAns} />
                    </div>
                  <div className="col-11">
                  <label for="correctAns" className="labelQuiz"> Correct Answer? </label>
                  </div>
                </div>
              </div>
          </div>
              <div className="row">
                Answer 4:
                <br />
                <div className="col-10"> 
                  <textarea className="answerOption"
                    type="text"
                    name="answer_option_4"
                    value={this.state.answer_options.answer_option_4}
                    onChange={this.updateAnswer}
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                    <input
                      type="radio" 
                      id="correctAns"
                      className="answerTick"
                      name="correctanswer"
                      value={this.state.answer_options.answer_option_4}
                      onClick={this.updateCorrectAns} />
                      </div>
                  <div className="col-11">
                  <label for="correctAns" className="labelQuiz"> Correct Answer? </label>
                  </div>
                </div>
              </div>
          </div>
              <div className="question_save text-center">
                <button type="submit" > 
                Save Question
                </button>
             </div>

          </form>
        </Container>
      </div>
    );
  }
}


export default AdminQuestionMaker;
