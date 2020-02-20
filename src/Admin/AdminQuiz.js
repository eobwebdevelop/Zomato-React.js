import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CollapsibleQuiz.css';


class AdminQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { quiz, editid } = this.props;
    return (
      <div>
        <Container>
          {quiz.map((quest) => (
            <div className="row">
              <div key={quest.id} className="col-7">
                {quest.question}
              </div>
              <Link to={`/admin/quiz_editor/${editid}/questions/${quest.id}`}>
                <button className="col" type="submit">
                  Edit Question ►
                </button>
                {' '}
              </Link>

            </div>
          ))}
        </Container>
      </div>
    );
  }
}

AdminQuiz.propTypes = {
  editid: PropTypes.func.isRequired,
  quiz: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default AdminQuiz;
