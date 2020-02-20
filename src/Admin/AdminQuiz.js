import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
              <div key={quest.id} className="col">
                {quest.question}
                <Link to={`/admin/quiz_editor/${editid}/questions/${quest.id}`}>
                  <button type="submit" className="btn-list">
                    Edit Question ►
                  </button>
                  {' '}
                </Link>
              </div>
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
