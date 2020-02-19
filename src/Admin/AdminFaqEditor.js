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
      question: this.props.selectedFaq.faq_question,
      content: this.props.selectedFaq.content,
      language_id: this.props.selectedFaq.language_id,
      language_name: this.props.selectedFaq.language_name,
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
  
  
  onChangeLanguage = (e) => {
    this.setState({
        language: e.value,
        language_name: e.label})
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
      const contentWithCloudinaryUrl = this.state.content.replace(this.state.base64Url, this.state.lastUploadedFile.secure_url);
     
      return { content: contentWithCloudinaryUrl }
    },  () => {
      if(this.props.match.isExact === false){
        fetch(`${process.env.REACT_APP_SERVER_URL}/admin/faq/edit`,
        {
            method:  'PUT',
            headers:  new Headers({
                    'Content-Type':  'application/json'
            }),
            body:  JSON.stringify({
              faq_question: this.state.question,
              content: this.state.content,
              language_id: this.state.language_id,
              id: this.props.selectedFaq.id,
            }),
        })
        .then(res  => {
          if (res.status === 200) {
            const editedFaq = {
              id: this.props.selectedFaq.id,
              faq_question: this.state.question,
              content: this.state.content,
              language_id: this.state.language_id,
              language_name: this.state.language_name
            } 
            this.props.updateFaqList(editedFaq);
          }
        })
      }else{
          fetch(`${process.env.REACT_APP_SERVER_URL}/admin/faq/create`,
            {
              method: 'POST',
              headers: new Headers({
                'Content-Type': 'application/json',
              }),
              body: JSON.stringify({
                faq_question: this.state.question,
                content: this.state.content,
                language_id: this.state.language,
              }),
            }
          ).then((res) => {
              if (res.status === 200) {
                this.props.addNewFaqToFaqList();
              }
            });
        };
    })
  }

  headerContentDisplay = () => {
    return this.props.match.isExact ? 'Create FAQ' : 'Edit FAQ' ;
  }

  render() {
    console.log(this.props.langOptions, 'language')
    return (
      <div>
        <Container>
          <h1>{this.headerContentDisplay()}</h1>
          <label>
            Language:
          </label>
              <Select
                  placeholder = "Select a language"
                  value={{value: this.state.language , label: this.state.language_name}}
                  onChange={this.onChangeLanguage}
                  classNamePrefix="select"
                  options={this.props.langOptions.map((lg) => ({value: lg.id, label: lg.name}))} 
              />
          <input
            placeholder="Write your question here"
            type="text"
            value={this.state.question}  
            onChange={this.onChangeQuestion}
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
