import React, { Component } from 'react';
// import { Container, Row}  from 'react-bootstrap';



class Question extends Component {
constructor(props) {
  super(props);
  this.state = {
    question: 'by default: How many complimentary dishes do Zomato Gold customers receive?'
  }
}  

render() {
  return (
      <>
      {/* Counter */}
        <p className='questionStyle'>{this.state.question}</p>
      </>
    );
  }
}

export default Question;