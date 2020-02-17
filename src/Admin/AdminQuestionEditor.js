import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import AdminAnswerEditor from './AdminAnswerEditor';
import QuizzesContext from '../contexts/quiz-context';


class AdminQuestionEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  componentDidUpdate(prevProps) {
    if (this.props.quizzesAreLoaded !== prevProps.quizzesAreLoaded) {
      this.props.onQuizfound(this.props.match.params.id);
    }
    if (this.props.quizfound !== prevProps.quizfound) {
      this.props.onQuestionfound(this.props.match.params.qid)
    } if (this.props.questionfound !== prevProps.questionfound) {
        this.updatingStates(this.props.questionfound) 
        this.props.questionfound.answers.forEach((ans, i) => {
        this.initializeAnswer(ans.answer_option, i+= 1)})  
    }
  }

  handlerSubmit = (e) => {
    const {question, id} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/quiz/edit`,
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({id, question, answers:[
          this.state.answer_option_1,
          this.state.answer_option_2,
          this.state.answer_option_3,
          this.state.answer_option_4
        ]}),
    })
    .then(res  =>  res.json())
  }

  updateQuestion = (event) => {
    this.setState({question: event.target.value})
  }
  updatingStates = (question) => {
      this.setState({
      question: question.question
  })
}

 initializeAnswer = (event, i) => {
    this.setState({
      [`answer_option_${i}`]: event
    })
  }

  updateAnswer = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateChecked = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    console.log(this.state)
    const {
      quizfound,
      questionfound,
    } = this.props;
    const { question } = this.state;
    if (!questionfound) {
      return <p>Please refresh your page </p>;
    } 
    return (
      <div>
        <Container>
          <h1>Edit Question</h1>
          <hr />
          <p>
        You are editing a question in
            {' '}
            {quizfound.name}
          </p>
          <form className="product-form" onSubmit={this.handlerSubmit}>
            <div className="Question-Edit">
              <div className="Question-Edit-Inner">
                <h2>
                  Question
                  {' '}
                  {questionfound.question}
                </h2>
                <input type="text" name="quizname" value={question} onChange={this.updateQuestion} />
                <AdminAnswerEditor
                  updateChecked={this.updateChecked}
                  updateAnswer={this.updateAnswer}
                  answers={questionfound.answers}
                  answeroptions={[
                    this.state.answer_option_1,
                    this.state.answer_option_2,
                    this.state.answer_option_3,
                    this.state.answer_option_4
                  ]}
                />
              </div>
            </div>  
            <button type="submit" className="btn">
            Save Question
            </button>
          </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(AdminQuestionEditor);
