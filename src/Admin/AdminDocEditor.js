import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminDocEditor = () => {
  return (
    <div>
      <Container>
        <h1>Documentation Editor</h1>
        <p>
          You can edit the documentation for %QUIZNAME here. Please use HTML
          markup.
        </p>
        <input
          className="documentation-editor"
          placeholder="
        <h1> Documentation Heading <h1>
        <p>
          Placeholder text.
        </p>
        "
        ></input>
        <Link to="/Admin/AdminQuizList">
          <button type="submit" class="btn">
            Save
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default AdminDocEditor;
