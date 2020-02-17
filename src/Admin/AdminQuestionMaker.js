import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';

class AdminQuestionMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = (e) => {
    console.log('');
  //   const {question_id } = this.state
  //   e.preventDefault();
  //   fetch(`${process.env.REACT_APP_SERVER_URL}/admin/quiz/create`,
  //   {
  //       method:  'POST',
  //       headers:  new Headers({
  //               'Content-Type':  'application/json'
  //       }),
  //       body:  JSON.stringify({name, region_id}),
  //   })
  //   .then(res => {
  //         if(res.status === 200){ 
  //           this.props.history.push('/admin/quiz_list')
  //         }}
  //       )
  }
  
  render() {
    return (
      <div>
        <Container>
          <form onSubmit={this.handleSubmit}>
            New question: 
            <input type="text" name="question" />
            <div className="col-sm">
              Answer Option:
              <br />
              Answer 1:
              <br />
              <textarea
                type="text"
                name="ans"
                value="ans"
              />
              <div className="row">
                Correct Answer?
                <input
                  type="checkbox"
                  name="correctanswer"
                  value="correctanswer"
                />
              </div>
              Answer 2:
              <br />
              <textarea
                type="text"
                name="ans"
                value="ans"
              />
               <div className="row">
                Correct Answer?
                <input
                  type="checkbox"
                  name="correctanswer"
                  value="correctanswer"
                />
              </div>
              Answer 3:
              <br />
              <textarea
                type="text"
                name="ans"
                value="ans"
                onChange={this.updateAnswer}
              />
              <div className="row">
                Correct Answer?
                <input
                  type="checkbox"
                  name="correctanswer"
                  value="correctanswer"
                />
              </div>
              Answer 4:
              <br />
              <textarea
                type="text"
                name="ans"
                value="ans"
              />
              <div className="row">
                Correct Answer?
                <input
                  type="checkbox"
                  name="correctanswer"
                  value="correctanswer"
                />
              </div>
            </div>
            <button type="submit"> 
            Save Question
            </button>
          </form>
        </Container>
      </div>
    );
  }
}


export default AdminQuestionMaker;
