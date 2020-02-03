import React from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';


const AdminAnswerEditor = (props) => {
  return (
    <div>
      <Container>
        {props.answers.map((ans) => (
          <div className="row">
            <div key={ans.id} className="col">
            Answer Option:
              <textarea type="text" name="quizname" value={ans.answer_option} />
              <br />
              Tick the correct answer?
              <input
                type="checkbox"
                name="correctanswer"
                value="correctanswer"
              />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};
export default withRouter(AdminAnswerEditor);
