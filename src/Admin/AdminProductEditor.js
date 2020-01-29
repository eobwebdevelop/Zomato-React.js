import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import './AdminCreator.css';

class AdminProductEditor extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: 'resto1',
      description: '',
      id:'',
      chosenProduct: '',
    }
  };


 componentDidMount(){
 }

  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  updateDescription = (event) => {
    this.setState({description: event.target.value})
  }

  handlerSubmit = (e) => {
    const {name, description, id} = this.state
    e.preventDefault();
    console.log("the form has been submited with these fields:",  );
    fetch("http://localhost:3000/admin/product/edit",
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({name, description, id}),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
  }

  render() {
    const foundProduct = this.props.products.find((prod) => prod.id === +this.props.id);
    return (
        <Container>
            <div className="formparentcontainer">
            <h1 className="creator-title" > Add a new Product or Service</h1>
            <hr />
            <form className="product-form" onSubmit={this.handlerSubmit}>
              <h5> Fill in the product/service name </h5>
            <input type="text" name="name" placeholder={foundProduct ? foundProduct.name : ''} required onChange={this.updateName} /> 
             <h5> Product/Service Description: </h5>
             <textarea className ="product-description"  placeholder={ foundProduct ? foundProduct.description : ''} onChange={this.updateDescription} value= {this.state.description} > </textarea> 
            <button type="submit" class="btn-login">
                Submit
                </button>
            </form>
          </div>
        </Container>
      )}
  }

export default AdminProductEditor;
