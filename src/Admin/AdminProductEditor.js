import React, {Component} from 'react';
import { withRouter}  from "react-router-dom";
import { Container } from "react-bootstrap";
import './AdminCreator.css';

class AdminProductEditor extends Component  {
  constructor(props) {
    super(props);
    const productid = props.match.params.id;
    const product = props.products.find((prod) => prod.id === +productid);
    this.state = {
      name: product ?  product.name : '',
      description: product ? product.description : '',
      id: props.id,
    }
  };

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
   
    return (
        <Container>
            <div className="formparentcontainer">
            <h1 className="creator-title" > Add a new Product or Service</h1>
            <hr />
            <form className="product-form" onSubmit={this.handlerSubmit}>
              <h5> Fill in the product/service name </h5>
            <input type="text" name="name" value={this.state.name} required onChange={this.updateName} /> 
             <h5> Product/Service Description: </h5>
             <textarea className ="product-description"  onChange={this.updateDescription} value={this.state.description}> </textarea> 
            <button type="submit" className="btn-login">
                Submit
                </button>
            </form>
          </div>
        </Container>
      )}
  }

export default withRouter(AdminProductEditor);
