import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import './AdminCreator.css';

class AdminProductCreator extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: 'resto1',
      description: '',
    }
  };

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  updateDescription = (event) => {
    this.setState({description: event.target.value})
  }

  handlerSubmit = (e) => {
    const {name, description} = this.state
    e.preventDefault();
    console.log("the form has been submited with these fields:",  );
    fetch("http://localhost:3000/admin/product/create",
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({name, description}),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
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

export default AdminProductCreator;
