import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { cloudinaryPreset, apiBaseUrl } from '../keys'

class QuillEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      imageUrl: [],
      imageCloudinary: '',
      loading : false
    }; // You can also pass a Quill Delta here
    
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  handleChange = (value, delta) => {
    const getImageUrl = (dlt) =>
      dlt.ops.filter(i => i.insert && i.insert.image).map(i => i.insert);

    this.setState({
      text: value,
      imageUrl: getImageUrl(delta)
    });
  }

  uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()

    data.append('file', files[0])
    data.append('upload_preset', 'Zomato')

    this.setState({
      loading: true
    }, () => {
      fetch('https://api.cloudinary.com/v1_1/ddoc8nfxb/image/upload',
        {
          method: 'POST',
          mode: 'no-cors',
          body: data
        }
      )
      .then(res => res.json())
      .then(data => {
        console.log('upload complete', data)
  
        this.setState({
          image: data.secure_url,
          loading: false
        });
      })
    });


  }

  render() {
    console.log(this.state)
    return (
        <div className="text-editor">
          <ReactQuill 
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            value={this.state.text}
            onChange={this.handleChange}
          />

          <h1> test</h1>

          <div>
      <h1>Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={this.uploadImage}
      />
      {this.state.loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={this.state.imageCloudinary} style={{ width: '300px' }} />
      )}
    </div>
        </div>
    );
  }
}

export default QuillEditor;
