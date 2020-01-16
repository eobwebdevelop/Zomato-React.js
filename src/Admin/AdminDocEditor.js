/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminDocEditor.css';
import RegionDropDown from '../Learners/SignUp/RegionDropDown';


const langOptions = [
  {
    key: 'English',
    text: 'English',
    value: 'English',
  },
  {
    key: 'Português',
    text: 'Português',
    value: 'Português',
  },
];
const productOptions = [
  {
    key: 'Gold',
    text: 'Gold',
    value: 'Gold',
  },
  {
    key: 'Book',
    text: 'Book',
    value: 'Book',
  },
];

const AdminDocEditor = () => (
  <div>
    <Container>
      <h1>Documentation Editor</h1>
      <p>You can edit the documentation for %QUIZNAME here.</p>
      <label>
      Language:
      </label>
      <RegionDropDown selectOptions={langOptions} placeholder="Select language" />
      <label>
      Product:
      </label>
      <RegionDropDown selectOptions={productOptions} placeholder="Select product" />
      <label>
            Title:
      </label>
      <input
        type="text"
        name="name"
      />
      <button type="button" className="btn">Add sub-titile</button>
      <button type="button" className="btn">Add paragraph</button>
      <button type="button" className="btn">Add image</button>
      <label>
              Preview:
      </label>
      <input
        className="documentation-editor"
        name="name"
      />

      <Link to="/Admin/AdminQuizList">
        <button type="submit" className="btn">
            Save
        </button>
      </Link>
    </Container>
  </div>
);
export default AdminDocEditor;
