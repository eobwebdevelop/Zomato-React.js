
import React, { Component } from 'react';
import { withRouter}  from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './AdminCreator.css';


class AdminQuizEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  };

  componentDidMount() {
      this.setState({
        name: this.props.quizfound.name,
        id: this.props.quizfound.id,
      })
  }
  
  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  handlerSubmit = (e) => {
    const {name, id} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/quiz/edit`,
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({ name, id }),
    }) .then(res => {
      if(res.status === 200){ 
        this.props.history.push('/admin/quiz_list')
      }}
    ) 
  } 

  render() {
    console.log(this.state.name)
    return (
        <Container>
            <div className="formparentcontainer">
            <h1 className="creator-title" > Add a new Quiz or Service</h1>
            <hr />
            <form className="quiz-form" onSubmit={this.handlerSubmit}>
              <h5> Fill in the Quiz name </h5>
              <input type="text" name="name" value={this.state.name} required onChange={this.updateName} /> 
              <button type="submit" className="btn-login">
                  Submit
              </button>
            </form>
          </div>
        </Container>
      )}
  }


export default withRouter(AdminQuizEditor);
