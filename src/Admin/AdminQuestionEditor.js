import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import AdminAnswerEditor from './AdminAnswerEditor';

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
        this.initializeAnswer(ans.answer_option, ans.id, i+= 1)})  
    }
  }

  handlerSubmit = (e) => {
    const ansIdArr = Object.values(this.state.answer_ids)
    const ansOptArr = Object.values(this.state.answer_options)
    const answers = [];
    for (let i = 0; i < ansOptArr.length; i++){
      answers.push({answer_option: ansOptArr[i], id: ansIdArr[i]})
    }
    const {question, id, quiz_id, correct_answer_id} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/question/edit`,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({question, quiz_id, id, answers, correct_answer_id}),
    })
  }

  updateQuestion = (event) => {
    this.setState({question: event.target.value})
  }
  updatingStates = (question) => {
      this.setState({
      question: question.question,
      id: question.id,
      correct_answer_id: question.correct_answer_id,
      quiz_id: question.quiz_id
  })
}

 initializeAnswer = (event, id, i) => {
    this.setState(prevState =>({
    answer_options: {
      ...prevState.answer_options,
      [`answer_option_${i}`]: event
      },
    answer_ids: {
      ...prevState.answer_ids,
      [`answer_option_${i}_id`]: id
      },
    })
    )
  };

  updateAnswer = (event) => {
    const { name, value } = event.target
      this.setState(prevState => ({
          answer_options: {
            ...prevState.answer_options,
            [name]: value
          }
      })
      )
    }

  updateChecked = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

 

  render() {
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
                <input type="text" name="quizname" value={question} required onChange={this.updateQuestion} />
                <AdminAnswerEditor
                  updateChecked={this.updateChecked}
                  updateAnswer={this.updateAnswer}
                  answers={questionfound.answers}
                  correct_answer_id={this.state.correct_answer_id}
                  answeroptions={this.state.answer_options ? Object.values(this.state.answer_options) : []}
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



