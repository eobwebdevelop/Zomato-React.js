import React from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminAnswerEditor = ({ answers, answeroptions, updateAnswer, updateChecked }) => (
  <div>
    <Container>
      {answers && answers.map((ans, i) => (
        <div className="row">
          <div key={ans.id} className="col">
            Answer Option:
            <textarea
              type="text"
              name={`answer_option_${i + 1}`}
              value={answeroptions[i]}
              onChange={(e) => {
                updateAnswer(e);
              }}
            />
            <br />
            Tick the correct answer?
            <input
              type="checkbox"
              name="correctanswer"
              value={ans.id}
              onClick={(e) => {
                updateChecked(e);
              }}
            />
          </div>
        </div>
      ))}
    </Container>
  </div>
);

AdminAnswerEditor.propTypes = {
  updateAnswer: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  answeroptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(AdminAnswerEditor);
