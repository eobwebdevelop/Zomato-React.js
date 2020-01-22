import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import CloudinaryKeys from './CloudinaryKeys';

import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {
  const [text, setText] = useState('');
  const [lastUploadedFile, setLastUploadedFile] = useState({});

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
      [{ counter: true }],
    ],
  };

  const uploadToCloudinary = async (base64Url) => {
    const data = new FormData();
    data.append('file', base64Url);
    data.append('upload_preset', CloudinaryKeys.uploadPreset);
    const res = await fetch(
      CloudinaryKeys.uploadLink,
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
    const res = await fetch(
      CloudinaryKeys.deleteLink,
      {
        method: 'POST',
        body: data,
      },
    );
  };

  const handleChange = (value, delta) => {
    setText(value);
    if (delta.ops[0].insert) {
      uploadToCloudinary(delta.ops[0].insert.image);
    } else if (delta.ops[0].delete) {
      deleteFromCloudinary();
    }
  };


  return (
    <div className="text-editor">
      <ReactQuill
        modules={quillModules}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default QuillEditor;
