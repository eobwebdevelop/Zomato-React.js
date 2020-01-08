import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Quiz = () => {
  return (
    <div>
      <Container>
        <h1>Quiz</h1>
        <hr></hr>
        <Link to="/Learners/Quiz/Results">
          <button type="submit" class="btn">
            View Results
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default Quiz;
