/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AdminDocEditor.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DropDown from '../Learners/SignUp/DropDown';

class AdminDocEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // post
      title: '',
      // quill
      text: '',
      lastUploadedFile: {},
      base64Url: {},
    };
  }

  quillModules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  uploadToCloudinary = async (base64) => {
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
    this.setState({ lastUploadedFile: file });
  };

  deleteFromCloudinary = async () => {
    const data = new FormData();
    data.append('file', this.state.lastUploadedFile);
    data.append('token', this.state.lastUploadedFile.delete_token);
    await fetch(
      process.env.REACT_APP_CLOUDINARY_DELETE_LINK,
      {
        method: 'POST',
        body: data,
      },
    );
  };

  handleChangeQuill = (value, delta) => {
    for(let i=0; i<delta.ops.length; i++){
      if (typeof delta.ops[i].insert === 'object') {
        this.setState({base64Url: delta.ops[i].insert.image});
        this.uploadToCloudinary(delta.ops[i].insert.image);
      } else if (delta.ops[i].delete) {
        this.deleteFromCloudinary();
      } else {
        this.setState({ text: value });
    }
    }
  };
  
  onChangeProduct = () => {
    console.log('product', this.props.product);
    // not working
  };
  
  onChangeTitle = (e) => {
    this.setState({title: e.target.value});
    this.setState({product: 1});
  };
  
  postDocumentation = (e) => {
    e.preventDefault();

    this.setState(() => {
      const textWithCloudinaryUrl = this.state.text.replace(this.state.base64Url, this.state.lastUploadedFile.secure_url);
      return { text: textWithCloudinaryUrl }
    });

    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/doc/create`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          title: this.state.title,
          content: this.state.text,
          product_id: this.state.product,
        }),
      })
      .then((res) => {
        console.log('hey', res);
        if (res.status === 200) {
          // history.push('/admin/doc_list');
          console.log('cool, fix hist later')
        }
      });
  };

  render() {
    console.log('text', this.state.text);
    

    return (
      <div>
        <Container>
          <h1>Create new</h1>
          <label>
      Product:
          </label>
          {/* <DropDown
          selectOptions={products.map((prod) => ({ value: prod.id, label: prod.name }))}
          placeholder="Select product"
          onChange={onChangeProduct}
        /> */}
          <label>
            Title:
          </label>
          <input
            type="text"
            name="name"
            onChange={this.onChangeTitle}
          />
          <ReactQuill
            modules={this.quillModules}
            onChange={this.handleChangeQuill}
          />
          <button
            type="submit"
            className="btn"
            onClick={this.postDocumentation}
          >
            Save
          </button>
        </Container>
      </div>
    );
  }
}

AdminDocEditor.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withRouter(AdminDocEditor);
