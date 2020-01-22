import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [deleteToken, setDeleteToken] = useState('');

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
    data.append('upload_preset', 'Zomato');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/ddoc8nfxb/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    setImage(file.secure_url);
    setLoading(false);
    setDeleteToken(file.delete_token);
  };

  const deleteFromCloudinary = async () => {
    console.log('delete', deleteToken);
    const data = new FormData();
    data.delete('file', deleteToken);
    data.delete('upload_preset', 'Zomato');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/ddoc8nfxb/image/upload',
      {
        method: 'DELETE',
        body: data,
        token: deleteToken,
      },
    );
    const file = await res.json();
    console.log(file, 'file');
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
