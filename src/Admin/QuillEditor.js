import React, { useState } from 'react';
import ReactQuill from 'react-quill';

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
    ],
  };

  const uploadToCloudinary = async (base64Url) => {
    const data = new FormData();
    data.append('file', base64Url);
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
    const res = await fetch(
      process.env.REACT_APP_CLOUDINARY_DELETE_LINK,
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
