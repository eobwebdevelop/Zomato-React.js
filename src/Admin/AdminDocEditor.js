/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminDocEditor.css';
import RegionDropDown from '../Learners/SignUp/RegionDropDown';
import QuillEditor from './QuillEditor';


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

const AdminDocEditor = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [language, setLanguage] = useState([]);
  const [product, setProduct] = useState([]);

  const postDocumentation = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_PATH_ADMIN_DOC_CREATE,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          title,
          content,
          language_id: language,
          product_id: product,
        }),
      })
      .then((res) => {
        res.json();
        console.log(res);
      });
  };


  const onChangeLanguage = () => {
    console.log('language', language);
    // not working
  };
  const onChangeProduct = () => {
    console.log('language', language);
    // not working
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    setLanguage(1);
    setProduct(1);
  };

  const getFromChild = (child) => {
    setContent(child);
  };

  return (
    <div>
      <Container>
        <h1>Create new</h1>
        <label>
      Language:
        </label>
        <RegionDropDown
          selectOptions={langOptions}
          placeholder="Select language"
          onChange={onChangeLanguage}
        />
        <label>
      Product:
        </label>
        <RegionDropDown
          selectOptions={productOptions}
          placeholder="Select product"
          onChange={onChangeProduct}
        />
        <label>
            Title:
        </label>
        <input
          type="text"
          name="name"
          onChange={onChangeTitle}
        />
        <QuillEditor
          getFromChild={getFromChild}
        />
        <Link to="/Admin/AdminQuizList">
          <button
            type="submit"
            className="btn"
            onClick={postDocumentation}
          >
            Save
          </button>
        </Link>
      </Container>
    </div>
  );
};

export default AdminDocEditor;
