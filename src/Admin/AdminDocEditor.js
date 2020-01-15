/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminDocEditor.css';
// import ProductDropDown from './ProductDropdown';

const product = [
  { product: 'Gold' },
];

const AdminDocEditor = () => (
  <div>
    <Container>
      <h1>Documentation Editor</h1>
      <p>
          You can edit the documentation for %QUIZNAME here.
      </p>
      <form>
        <label>
              Title:
        </label>
        <input
          type="text"
          name="name"
        />
        <label>
              Text:
        </label>
        <input
          className="documentation-editor"
          name="name"
        />
        <label>
              Product:
        </label>
        {/* <ProductDropDown
          // product={product}
        /> */}
        <label>
              Language:
        </label>

      </form>
      <Link to="/Admin/AdminQuizList">
        <button type="submit" className="btn">
            Save
        </button>
      </Link>
    </Container>
  </div>
);
export default AdminDocEditor;
