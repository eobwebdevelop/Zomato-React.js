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
  const [language, setLanguage] = useState([]);
  const [product, setProduct] = useState([]);
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const postDocumentation = async () => {
    console.log('post doc function');

  //   const data = new FormData();
  //   data.append('title', title);
  //   data.append('content', content);
  //   data.append('language_id', lastUploadedFile.delete_token);
  //   data.append('product_id', lastUploadedFile.delete_token);
  //   const res = await fetch(
  //     process.env.REACT_APP_PATH_ADMIN_DOC_CREATE,
  //     {
  //       method: 'POST',
  //       body: data,
  //     },
  //   );
  };


  const onChangeLanguage = (e) => {
    setLanguage(1);
    // not working
  };
  const onChangeProduct = (e) => {
    setProduct(1);
    // not working
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    console.log(e.target.value)
    setContent("e.target.value");
  };

  console.log(language, product, title);

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
        <QuillEditor onChange={onChangeContent} />
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
