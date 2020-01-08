import React, { Component } from 'react';
import { Container, Row}  from 'react-bootstrap';
import { MDBContainer, MDBInput } from "mdbreact";
import './Quiz.css';



  class Answer extends Component {
    
    state = {
      radio: 2,
      correctAns: '',
      an1: 'Answer by default1',
      an2: 'Answer by default2',
      an3: 'Answer by default3',
      an4: 'Answer by default4'
    }
    
    onClick = (nr) => () => {
      this.setState({
        radio: nr
      });
    }

    render() {
      return (
        <MDBContainer className="mt-5">
          <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio===1 ? true : false} label={this.state.an1} type="radio"
            id="radio1" />
          <MDBInput gap onClick={this.onClick(2)} checked={this.state.radio===2 ? true : false} label={this.state.an2} type="radio"
            id="radio2" />
          <MDBInput gap onClick={this.onClick(3)} checked={this.state.radio===3 ? true : false} label={this.state.an3} type="radio"
            id="radio3" />
          <MDBInput gap onClick={this.onClick(4)} checked={this.state.radio===4 ? true : false} label={this.state.an4} type="radio"
            id="radio4" />
        </MDBContainer>
        );
      }
    }

export default Answer;
