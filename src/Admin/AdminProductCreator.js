import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './AdminCreator.css';
import Select from 'react-select';

class AdminProductCreator extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: 'resto1',
      description: '',
      language_id: '',
      displayLang: '',
    }
  };

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  updateDescription = (event) => {
    this.setState({description: event.target.value})
  }

  updateLang = (item) => {
    this.setState({
    language_id: item.value,
    displayLang:item })
  };

  handlerSubmit = (e) => {
    const {name, description, language_id} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/product/create`,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({name, description, language_id}),
    })
    .then(res  => {
      if (res.status === 200) {
        this.props.updateProductCreated();
      }
    })
  }

  render() {
    return (
        <Container>
            <div className="formparentcontainer">
            <h1 className="creator-title" > Add a new Product or Service</h1>
            <hr />
            <form className="product-form" onSubmit={this.handlerSubmit}>
            <h5> Fill in the product/service name </h5>
            <input type="text" name="name" placeholder= 'Product Name' required onChange={this.updateName} /> 
            <Select // change placeholder to the current region based on restaurant 
                value = {this.state.displaylang}
                onChange={this.updateLang}
                classNamePrefix="select"
                options={this.props.langOptions.map((item) => ({value: item.id, label: item.name}))} 
                />
             <h5> Product/Service Description: </h5>
             <textarea className ="product-description" onChange={this.updateDescription} value= {this.state.description} > </textarea> 
            <button type="submit" class="btn-login">
                Submit
                </button>
            </form>
          </div>
        </Container>
      )}
  }

export default withRouter(AdminProductCreator);
