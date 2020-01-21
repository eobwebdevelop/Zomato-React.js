import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const Results = () => {
  return (
    <div>
      <Container>
        <h1>Results</h1>
        <hr></hr>
        <p>You got 50% (5/10)</p>
        <Link to="/Learners/Documentation/Documentation">
          <button type="submit" class="btn">
            Documentation
          </button>
        </Link>
        <br />
        <Link to="/Learners/QuizList/QuizList">
          <button type="submit" class="btn">
            Home
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default Results;
