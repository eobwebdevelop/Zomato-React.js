
import React, { Component } from 'react';
import { withRouter}  from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './AdminCreator.css';
import QuizzesContext from '../contexts/quiz-context';


class AdminQuizEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: '',
      name: '',
      language_id: '',
      user_type_id: '',
      product_id: '',
      id: '',
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
