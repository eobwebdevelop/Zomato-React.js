import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import imageUpload from 'quill-plugin-image-upload';

// Quill.register('modules/imageUpload', imageUpload);

const QuillEditor = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [image64, setImage64] = useState('');
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
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
  };

  const handleChange = (value, delta) => {
    console.log('delta', delta.ops[0].insert.image, 'value', value);
    const getImage64 = (dlt) => {
      dlt.ops.filter((i) => i.insert && i.insert.image).map((i) => console.log('i.insert', i.insert));
    };
    setText(value);
    // setImage64(getImage64(delta));
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
    // imageUpload: {
    //   upload: uploadImage(),
    // },
  };

// console.log('image64', image64);
  return (
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        modules={modules}
        value={text}
        onChange={handleChange}
      />

      <div className="App">
        <h1>Upload Image</h1>
        <input
          type="file"
          name="file"
          placeholder="Upload an image"
          onChange={uploadImage}
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} style={{ width: '300px' }} alt="uploaded" />
        )}
      </div>
    </div>
  );
};

export default QuillEditor;
