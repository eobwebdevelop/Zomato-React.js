import React from 'react';
import PropTypes from 'prop-types';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const AdminAnswerEditor = ({
  answers, answeroptions, updateAnswer, updateChecked, correct_answer_id,
}) => (
  <div>
    <Container>
      {answers && answers.map((ans, i) => (
        <div key={ans.id} className="row">
          Answer Option:
          <div className="col-9">
            <textarea
              className="answerOption"
              type="text"
              name={`answer_option_${i + 1}`}
              value={answeroptions[i]}
              onChange={(e) => {
                updateAnswer(e, ans.id);
              }}
            />
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <input
                  className="radioQuiz"
                  type="radio"
                  id="correctAns"
                  checked={+correct_answer_id == +ans.id}
                  name="correct_answer_id"
                  value={ans.id}
                  onClick={(e) => {
                    updateChecked(e, ans.id);
                  }}
                />
              </div>
              <div className="col-11">
                <label htmlFor="correctAns" className="labelQuiz"> Correct Answer? </label>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  </div>
);

AdminAnswerEditor.propTypes = {
  updateChecked: PropTypes.func.isRequired,
  updateAnswer: PropTypes.func.isRequired,
  correct_answer_id: PropTypes.arrayOf(PropTypes.number).isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  answeroptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(AdminAnswerEditor);
