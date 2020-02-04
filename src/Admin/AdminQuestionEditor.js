import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import AdminAnswerEditor from './AdminAnswerEditor';
import QuizzesContext from '../contexts/quiz-context';


class AdminQuestionEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
    };
  }

  
  handlerSubmit = (e) => {
    const answeroptions = [
      this.state.answer_option_1,
      this.state.answer_option_2,
      this.state.answer_option_3,
      this.state.answer_option_4
    ]
    const answerids = [ ];
    e.preventDefault();
    console.log("the form has been submited with these fields:");
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/product/edit`,
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({}),
    })
    .then(res => {
      if(res.status === 200){ 
        this.props.history.push('/admin/product_list')
      }}
    ) 
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

  updateAnswer = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateCorrectAnswer = (event) =>{
    this.setState({
      correct_answer_id: event.target.name
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
          <form onSubmit={this.handlerSubmit}>
            <div className="Question-Edit">
              <div className="Question-Edit-Inner">
                <h2>
                  Question
                  {' '}
                  {questionfound.question}
                </h2>
                <input type="text" name="quizname" value={question} onChange={this.updateQuestion} />
                <AdminAnswerEditor
                  updateAnswer={this.updateAnswer}
                  answers={questionfound.answers}
                  answeroptions={[
                    this.state.answer_option_1,
                    this.state.answer_option_2,
                    this.state.answer_option_3,
                    this.state.answer_option_4
                  ]}
                  correctAnswer={+this.state.correct_answer_id}
                  updateCorrectAnswer={this.updateCorrectAnswer}
                />
              </div>
            </div>
          </form>
          <Link to="/admin/quiz_list">
            <button type="submit" className="btn">
            Save Question
            </button>
          </Link>
        </Container>
      </div>
    );
  }
}

export default withRouter(AdminQuestionEditor);
