import React from 'react';
import './AdminQuizMaker.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminQuizMaker = () => (
  <div>
    <Container>
      <h1>Create/Edit Quiz</h1>
      <hr />
      <p>
        You are creating a new quiz. MESSAGE FROM ED: This is just a
        placeholder that needs developing.
      </p>
      <form>
        Quiz Name:
        <input type="text" name="quizname" />
        <br />
        {' '}
        <br />
        Staff Type:
        <input type="text" name="quizname" />
        <br />
        {' '}
        <br />
        Product:
        <input type="text" name="quizname" />
        {' '}
        <br />
        {' '}
        <br />
        Language:
        <input type="text" name="quizname" />
        <br />
        <br />
        <div className="Question-Edit">
          <div className="Question-Edit-Inner">
            <h2>Question 1</h2>
            Question:
            <input type="text" name="quizname" />
            <br />
            Answer 1:
            <input type="text" name="quizname" />
            Correct Answer?
            <input
              type="checkbox"
              name="correctanswer"
              value="correctanswer"
            />
            Answer 2:
            <input type="text" name="quizname" />
            Correct Answer?
            <input
              type="checkbox"
              name="correctanswer"
              value="correctanswer"
            />
            Answer 3:
            <input type="text" name="quizname" />
            Correct Answer?
            <input
              type="checkbox"
              name="correctanswer"
              value="correctanswer"
            />
            Answer 4:
            <input type="text" name="quizname" />
            Correct Answer?
            <input
              type="checkbox"
              name="correctanswer"
              value="correctanswer"
            />
          </div>
        </div>
      </form>
      <Link to="/admin/quiz_list">
        <button type="submit" className="btn">
          Save Quiz
        </button>
      </Link>
    </Container>
  </div>
);
export default AdminQuizMaker;
