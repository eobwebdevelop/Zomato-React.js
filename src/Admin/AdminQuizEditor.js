
import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import './AdminCreator.css';

class AdminQuizEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'resto1',
      description: '',
      id:'',
    }
  };



  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  updateDescription = (event) => {
    this.setState({description: event.target.value})
  }

  handlerSubmit = (e) => {
    const {name, description, id} = this.state
    e.preventDefault();
    console.log("the form has been submited with these fields:",  );
    fetch("http://localhost:3000/admin/quiz/edit",
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({name, description, id}),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
  }

  render() {
    console.log(this.props)
    return (
        <Container>
            <div className="formparentcontainer">
            <h1 className="creator-title" > Add a new Quiz or Service</h1>
            <hr />
            <form className="quiz-form" onSubmit={this.handlerSubmit}>
            <h5> Fill in the Quiz name </h5>
            <input type="text" name="name" placeholder= 'Quiz Name' required onChange={this.updateName} /> 
             <h5> Question 1 </h5>
             <textarea className ="question" onChange={this.updateDescription} value= {this.state.description} > </textarea>
             <input type="text" name="name" placeholder= 'Correct Answer' required onChange={this.updateCorrectAnswer} />  
            <button type="submit" class="btn-login">
                Submit
                </button>
            </form>
          </div>
        </Container>
      )}
  }


export default AdminQuizEditor;
