import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const FAQ = () => (
  <div>
    <Container>
      <div>
        <h1>FAQ</h1>
        <hr />
        <h2>Is this a question?</h2>
        <p>
            Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
            kjbbaj,snjsns jn kjn kj
        </p>
        <h2>Is this a question?</h2>
        <p>
            Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
            kjbbaj,snjsns jn kjn kj
        </p>
        <h2>Is this a question?</h2>
        <p>
            Blahd ijwb djwnblj nwdnwkjdn kjdnkjw ndjw s, akjbkjndksma.ksn
            kjbbaj,snjsns jn kjn kj
        </p>
        <Link to="/Learners/QuizList/QuizList">
          <button type="submit" className="btn">
              Home
          </button>
        </Link>
      </div>
    </Container>
  </div>
);
export default FAQ;
