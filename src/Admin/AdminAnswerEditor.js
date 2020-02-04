import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const AdminAnswerEditor = (props) => (
  <div>
    <Container>
      {props.answers && props.answers.map((ans, i) => {
        return (
          <div className="row">
            <div key={ans.id} className="col">
            Answer Option:
              <textarea
                type="text"
                name={`answer_option_${i + 1}`}
                value={props.answeroptions[i]}
                onChange={(e) => {
                  props.updateAnswer(e);
                }}
              />
              <br />
              Tick the correct answer?
              <input
                type="checkbox"
                name="correctanswer"
                value="correctanswer"
              />
            </div>
          </div>
        );
      })}
    </Container>
  </div>
);
export default withRouter(AdminAnswerEditor);
