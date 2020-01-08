import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div>
        <h1>FAQ</h1>
        <hr></hr>
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
          <button type="submit" class="btn">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};
export default FAQ;
