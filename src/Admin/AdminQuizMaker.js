import React from "react";
import "./AdminQuizMaker.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminQuizMaker = () => {
  return (
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
          <input type="text" name="quizname"></input>
          <br /> <br />
          Staff Type:
          <input type="text" name="quizname"></input>
          <br /> <br />
          Product:
          <input type="text" name="quizname"></input> <br /> <br />
          Language:
          <input type="text" name="quizname"></input>
          <br />
          <br />
          <div class="Question-Edit">
            <div class="Question-Edit-Inner">
              <h2>Question 1</h2>
              Question:
              <input type="text" name="quizname"></input>
              <br />
              Answer 1:
              <input type="text" name="quizname"></input>Correct Answer?
              <input
                type="checkbox"
                name="correctanswer"
                value="correctanswer"
              ></input>
              Answer 2:
              <input type="text" name="quizname"></input>
              Correct Answer?
              <input
                type="checkbox"
                name="correctanswer"
                value="correctanswer"
              ></input>
              Answer 3:
              <input type="text" name="quizname"></input>
              Correct Answer?
              <input
                type="checkbox"
                name="correctanswer"
                value="correctanswer"
              ></input>
              Answer 4:
              <input type="text" name="quizname"></input>
              Correct Answer?
              <input
                type="checkbox"
                name="correctanswer"
                value="correctanswer"
              ></input>
            </div>
          </div>
        </form>
        <Link to="/Admin/AdminQuizList">
          <button type="submit" class="btn">
            Save Quiz
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default AdminQuizMaker;
