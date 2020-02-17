import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminQuestionMaker  from './AdminQuestionMaker';
import Select from 'react-select';


class AdminQuizMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  updateStaff = (item) => {
    this.setState({
      user_type_id: item.value,
      displayStaff:item })
    }

  updateLang = (item) => {
    this.setState({
      language_id: item.value,
      displayLang:item })
    }

  updateProduct = (item) => {
    this.setState({
      product_id: item.value,
      displayproduct:item })
    }
  

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  handleSubmit = (e) => {
    const {name, user_type_id, product_id, language_id} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/quiz/create`,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({name, user_type_id, product_id, language_id})
    })
    .then(response => response.json())
    .then(data => {
      this.setState(state => ({
        ...state,
        quiz_id: data.id
      }));
    })
  }


  handleQuestionSubmit = (e) => {
    const {question, correct_answer, answer_options, quiz_id} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/question/create`,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
         body:  JSON.stringify(question, correct_answer, answer_options, quiz_id),
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
    const optionsStaff = [
      { value: 1, label: 'Restauranter' },
      { value: 2, label: 'Zomato Employee' },
      { value: 3, label: 'Admin' },
    ];
    const optionsLang = [
      { value: 1, label: 'English' },
      { value: 2, label: 'Português' },
    ];
    return (
      <div>
        <Container>
          <h1>Create/Edit Quiz</h1>
          <hr />
          <p>
          You are creating a new quiz, please save each Quiz and Question as you make them. 
          </p>
          <form onSubmit={this.handleSubmit}>
          Quiz Name:
            <input type="text"  value={this.state.name} required onChange={this.updateName}/>
            <br />
            {' '}
            <br />
          Staff Type:
          <Select
                placeholder = "Select who your quiz is for" // change placeholder to the current region based on restaurant 
                value = {this.state.displayStaff}
                onChange={this.updateStaff}
                classNamePrefix="select"
                options={optionsStaff} 
                />
              <br />
          Product:
           <Select
                placeholder = "Select your Product" // change placeholder to the current region based on restaurant 
                value = {this.state.displayproduct}
                onChange={this.updateProduct}
                classNamePrefix="select"
                options={this.props.products.map((item) => ({value: item.id, label: item.name}))} 
                />
          Language:
           <Select
                placeholder = "Select your Product" // change placeholder to the current region based on restaurant 
                value = {this.state.displaylanguage}
                onChange={this.updateLang}
                classNamePrefix="select"
                options={optionsLang} 
                /> 
            <button type="submit" className="btn">
            Save Quiz
            </button>
            </form>
              <div className="Question-Edit">
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit}
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  />
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit}
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  /> 
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit}
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  /> 
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit} 
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  /> 
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit} 
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  /> 
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit} 
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  /> 
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit} 
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  /> 
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit} 
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  /> 
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit} 
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  answer_options={this.state.answer_options}
                  /> 
                <AdminQuestionMaker 
                  handleQuestionSubmit={this.handleQuestionSubmit} 
                  updateCorrectAns={this.updateCorrectAns}
                  updateAnswer={this.updateAnswer}
                  />              </div>
          <Link to="/admin/quiz_list">
            <button className="btn">
            Save Quiz
            </button>
          </Link>
        </Container>
      </div>
    );
  }
}
export default AdminQuizMaker;
