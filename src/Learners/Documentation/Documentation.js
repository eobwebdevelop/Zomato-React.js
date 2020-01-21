import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


const Documentation = () => {

  // should be a map of the fetch - structure for one piece of documentation
  return (
    <div>
      <Container>
        <h1>Documentation</h1>
        <hr></hr>
        <h2>Heading</h2>
        <p>
          Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
          kjbbaj,snjsns jn kjn kj
        </p>
        <h2>Heading</h2>
        <p>
          Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
          kjbbaj,snjsns jn kjn kj
        </p>
        <h2>Heading</h2>
        <p>
          Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
          kjbbaj,snjsns jn kjn kj
        </p>
        <Link to="/Learners/QuizList/QuizList">
          <button type="submit" class="btn">
            Home
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default Documentation;
