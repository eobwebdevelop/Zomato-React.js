import React from "react";
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div>
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
    </div>
  );
};
export default Documentation;
