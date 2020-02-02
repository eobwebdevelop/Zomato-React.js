
import React, {Component} from 'react';
import { withRouter}  from "react-router-dom";
import { Container } from "react-bootstrap";
import './AdminCreator.css';

class AdminQuizEditor extends Component {
  constructor(props) {
    super(props);
    const quizid = props.match.params.id;
    const quiz = props.quizzes.find((prod) => prod.id === +quizid);
    this.state = {
      name: quiz ? quiz.name : '',
      questions: quiz ? quiz.questions : '',
      id: quizid,
      quiz: quiz ? quiz : [],
    }
  };



  updatequestion = (event) => {
    this.setState({queston: event.target.value})
  }

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  handlerSubmit = (e) => {
    const {questions, name, id} = this.state
    e.preventDefault();
    console.log("the form has been submited with these fields:",  );
    fetch("http://localhost:3000/admin/quiz/edit",
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({questions, name, id}),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
  }

  render() {
    return (
        <Container>
            <div className="formparentcontainer">
            <h1 className="creator-title" > Add a new Quiz or Service</h1>
            <hr />
            <form className="quiz-form" onSubmit={this.handlerSubmit}>
              <h5> Fill in the Quiz name </h5>
              <input type="text" name="name" value={this.state.name} required onChange={this.updateName} /> 
               {/* {this.state.quiz.map((quiz) =>{
                <h5> Question {quiz.questions.id}</h5>
                <input type="text" name="name" value={quiz.questions.} required onChange={this.updateQuestion} /> 
              }
              )}  */}
    
              <textarea className ="question" onChange={this.updateDescription} value={this.state.description}> </textarea>
              <input type="text" name="name" placeholder= 'Correct Answer' required onChange={this.updateCorrectAnswer} />  
              <button type="submit" class="btn-login">
                  Submit
              </button>
            </form>
          </div>
        </Container>
      )}
  }


export default withRouter(AdminQuizEditor);
