import React, { Component } from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import AdminAnswerEditor from './AdminAnswerEditor';
import QuizzesContext from '../contexts/quiz-context';


class AdminQuestionEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <QuizzesContext.Consumer>
        {({ quizfound, questionfound}) => (
          <div>
            <Container>
              <h1>Edit Question</h1>
              <hr />
              <p>
            You are editing a question in
                {' '}
                {quizfound && quizfound.name}
              </p>
              <form>
                <div className="Question-Edit">
                  <div className="Question-Edit-Inner">
                    <h2>
                Question
                      {' '}
                      {questionfound.id}
                    </h2>
                    <input type="text" name="quizname" value={questionfound.question} />
                    <AdminAnswerEditor
                      onEdit={this.props.onEdit}
                      answers={questionfound.answers}
                    />
                  </div>
                </div>
              </form>
              <Link to="/admin/quiz_list">
                <button type="submit" className="btn">
                Save Question
                </button>
              </Link>
            </Container>
          </div>
        )}
      </QuizzesContext.Consumer>
    );
  }
}

export default withRouter(AdminQuestionEditor);
