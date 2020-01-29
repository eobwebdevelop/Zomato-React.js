/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminDocEditor.css';
import ReactQuill from 'react-quill';
import DropDown from '../Learners/SignUp/DropDown';
import 'react-quill/dist/quill.snow.css';


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
  // post
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [language, setLanguage] = useState([]);
  const [product, setProduct] = useState([]);
  // quill
  const [text, setText] = useState('');
  const [lastUploadedFile, setLastUploadedFile] = useState({});
  const [base64Url, setBase64Url] = useState({});

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const uploadToCloudinary = async (base64) => {
    const data = new FormData();
    data.append('file', base64);
    data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    const res = await fetch(
      process.env.REACT_APP_CLOUDINARY_UPLOAD_LINK,
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    setLastUploadedFile(file);
  };

  const deleteFromCloudinary = async () => {
    const data = new FormData();
    data.append('file', lastUploadedFile);
    data.append('token', lastUploadedFile.delete_token);
    await fetch(
      process.env.REACT_APP_CLOUDINARY_DELETE_LINK,
      {
        method: 'POST',
        body: data,
      },
    );
  };

  const handleChangeQuill = (value, delta) => {
    setText(value);
    if (typeof delta.ops[0].insert === 'object') {
      setBase64Url(delta.ops[0].insert.image);
      uploadToCloudinary(delta.ops[0].insert.image);
    } else if (delta.ops[0].delete) {
      deleteFromCloudinary();
    }
  };

  const updateContent = () => {
    console.log('file in update content', lastUploadedFile);
    // const textWithCloudinaryUrl = text.replace(base64Url, lastUploadedFile.secure_url);
    const textWithCloudinaryUrl = text.replace('oi', 'olá olá');
    console.log('heyho', lastUploadedFile.secure_url);
    // console.log('textWithCloudinaryUrl', textWithCloudinaryUrl);
    setContent(textWithCloudinaryUrl);
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

  const postDocumentation = (e) => {
    e.preventDefault();
    // updateContent();
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
      });
  };


  return (
    <div>
      <Container>
        <h1>Create new</h1>
        <label>
      Language:
        </label>
        <DropDown
          selectOptions={langOptions}
          placeholder="Select language"
          onChange={onChangeLanguage}
        />
        <label>
      Product:
        </label>
        <DropDown
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
        <ReactQuill
          modules={quillModules}
          value={text}
          onChange={handleChangeQuill}
        />
        <Link to="/admin/quiz_list">
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
