import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AdminDocEditor.css';
import { Container } from 'react-bootstrap';
import Select from 'react-select';


class AdminDocEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.selectedDoc.title,
      text: this.props.selectedDoc.text,
      lastUploadedFile: {},
      base64Url: {},
      product: this.props.selectedDoc.product_id,
      productLabel: this.props.selectedDoc.product_name,
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
    
  onChangeProduct = (e) => {
    this.setState({
      product: e.value,
      productLabel: e.label})
  };
    
  onChangeTitle = (e) => {
    this.setState({title: e.target.value});
  };

  onChangeQuill = (value, delta) => {
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
  
  onChangeTitle = (e) => {
    this.setState({title: e.target.value});
  };
  
  postDocumentation = (e) => {
    e.preventDefault();

    this.setState(() => {
      const textWithCloudinaryUrl = this.state.text.replace(this.state.base64Url, this.state.lastUploadedFile.secure_url);
      return { text: textWithCloudinaryUrl }
    },  () => {
      if(this.props.match.isExact === false){
        fetch(`${process.env.REACT_APP_SERVER_URL}/admin/doc/edit`,
        {
            method:  'PUT',
            headers:  new Headers({
                    'Content-Type':  'application/json'
            }),
            body:  JSON.stringify({
              title: this.state.title,
              content: this.state.text,
              product_id: this.state.product,
              id: this.props.selectedDoc.id,
            }),
        })
        .then(res  => {
          if (res.status === 200) {
            //call set state in Doc list here
            this.props.history.push('/admin/doc_list');
          }
        })
      }else{
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
            }
          ).then((res) => {
              if (res.status === 200) {
                this.props.history.push('/admin/doc_list');
              }
            });
        };
    })
  }

  headerContentDisplay = () => {
    return this.props.match.isExact ? 'Create Documentation' : 'Edit Documentation' ;
  }

  render() {
    return (
      <div>
        <Container>
          <h1>{this.headerContentDisplay()}</h1>
          <label>
            Product:
          </label>
              <Select
                  placeholder = "Select a Product"
                  value={{value: this.state.product , label: this.state.productLabel}}
                  onChange={this.onChangeProduct}
                  classNamePrefix="select"
                  options={this.props.products.map((prod) => ({value: prod.id, label: prod.name}))} 
              />
          <input
            placeholder="Title"
            type="text"
            name="name"
            value={this.state.title}  
            onChange={this.onChangeTitle}
          />
          <ReactQuill
            className='quill'
            modules={this.quillModules}
            onChange={this.onChangeQuill}
            value={this.state.text}
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
