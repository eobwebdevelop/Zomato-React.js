import React, { Component } from 'react';
import { Container, Row, Col}  from 'react-bootstrap';
import { MDBInput } from "mdbreact";
import Timer from './Timer';
import './Quiz.css';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';



class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: null,
      rightAns: '',
      an1: 'Answer by default1',
      an2: 'Answer by default2',
      an3: 'Answer by default3',
      an4: 'Answer by default4',
      currentQuestion: 1,
      totalQuestions: 10,
      question: 'by default: How many complimentary dishes do Zomato Gold customers receive?'     
    }
  }
  
  onClick = (nr) => {
    this.setState({
      radio: nr
    });
  }

  render() {

    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage, onChangeLanguage }) => (
          <Container>
            <h1>Zomato Gold Quiz</h1>
            <hr />
            {/* Counter */}
            
            <span className='counter'> Question {this.state.currentQuestion} from  {this.state.totalQuestions}</span>
            
            {/* Question  */}
            <p className='questionStyle font-weight-bold'>{this.state.question}</p>

            <MDBInput gap onClick={() => this.onClick(1)} checked={this.state.radio===1 ? true : false} label={this.state.an1} type="radio"
              id="radio1" />
            <MDBInput gap onClick={() => this.onClick(2)} checked={this.state.radio===2 ? true : false} label={this.state.an2} type="radio"
              id="radio2" />
            <MDBInput gap onClick={() => this.onClick(3)} checked={this.state.radio===3 ? true : false} label={this.state.an3} type="radio"
              id="radio3" />
            <MDBInput gap onClick={() => this.onClick(4)} checked={this.state.radio===4 ? true : false} label={this.state.an4} type="radio"
              id="radio4" />

            {/* Timer */}
            <Timer  ms={600000} /> 
            {/* Bottons */}
            <Row>
              <Col md='12'>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn" disabled={!this.state.radio}>
                  {translations[currentLanguage].Answer.ButtonN}
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </LanguagesContext.Consumer>
    );
  }
}

export default Answer;
