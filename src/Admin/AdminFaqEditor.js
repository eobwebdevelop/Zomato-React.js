import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Container } from 'react-bootstrap';
import Select from 'react-select';


class AdminFaqEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.selectedFaq ? this.props.selectedFaq.faq_question : '',
      content: this.props.selectedFaq ? this.props.selectedFaq.content : '',
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
    
    
  onChangeQuestion = (e) => {
    this.setState({question: e.target.value});
  };

  onChangeQuill = (value, delta) => {
    for(let i=0; i<delta.ops.length; i++){
      if (typeof delta.ops[i].insert === 'object') {
        this.setState({base64Url: delta.ops[i].insert.image});
        this.uploadToCloudinary(delta.ops[i].insert.image);
      } else if (delta.ops[i].delete) {
        this.deleteFromCloudinary();
      } else {
        this.setState({ content: value });
    }
    }
  };
  
  
  postFaq = (e) => {
    e.preventDefault();

    this.setState(() => {
      const textWithCloudinaryUrl = this.state.content.replace(this.state.base64Url, this.state.lastUploadedFile.secure_url);
      return { text: textWithCloudinaryUrl }
    },  () => {
    //   if(this.props.match.isExact === false){
    //     fetch(`${process.env.REACT_APP_SERVER_URL}/admin/faq/edit`,
    //     {
    //         method:  'PUT',
    //         headers:  new Headers({
    //                 'Content-Type':  'application/json'
    //         }),
    //         body:  JSON.stringify({
    //           title: this.state.question,
    //           content: this.state.content,
    //           id: this.props.selectedFaq.id,
    //         }),
    //     })
    //     .then(res  => {
    //       if (res.status === 200) {
    //         this.props.history.push('/admin/faq_list');
    //       }
    //     })
    //   }else{
          fetch(`${process.env.REACT_APP_SERVER_URL}/admin/faq/create`,
            {
              method: 'POST',
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
              body: JSON.stringify({
                title: this.state.question,
                content: this.state.content,
              }),
            }
          ).then((res) => {
              if (res.status === 200) {
                this.props.history.push('/admin/faq_list');
              }
            });
        // };
    })
  }

  headerContentDisplay = () => {
    return this.props.match.isExact ? 'Create FAQ' : 'Edit FAQ' ;
  }

  render() {
    return (
      <div>
        <Container>
          <h1>{this.headerContentDisplay()}</h1>
          <input
            placeholder="Faq"
            type="text"
            value={this.state.question}  
            onChange={this.onChangeFaq}
          />
          <ReactQuill
            className='quill'
            modules={this.quillModules}
            onChange={this.onChangeQuill}
            value={this.state.content}
          />
          <button
            type="submit"
            className="btn"
            onClick={this.postFaq}
          >
            Save
          </button>
        </Container>
      </div>
    );
  }
}


export default withRouter(AdminFaqEditor);
