import React, {Component} from 'react';
import { withRouter}  from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Select from 'react-select';

class AdminProductEditor extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product ?  props.product.name : '',
      description: props.product ? props.product.description : '',
      id: props.match.params.id,
      language_id: props.product ? props.product.language_id : '',
      displaylang: '',
    }
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.product && this.props.product) {
      this.setState({
        name: this.props.product.name,
        language_id: this.props.product.language_id,
        id: this.props.product.id,
      })
    }
  }

  updateLang = (item) => {
    this.setState({
    language_id: item.value,
    displayLang: item})
  };


  updateName = (event) => {
    this.setState({name: event.target.value})
  }

  updateDescription = (event) => {
    this.setState({description: event.target.value})
  }

  handlerSubmit = (e) => {
    const {name, description, language_id, id} = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/product/edit`,
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({name, description, language_id, id}),
    })
    .then(res  => {
      if (res.status === 200) {
        const editedProduct = {
          id: this.state.id,
          description: this.state.description,
          language_id: this.state.language_id,
          name: this.state.name,
        }
        this.props.updateProductList(editedProduct);
      }
    })
  }
  render() {
    return (
      <>
        <Container>
            <div className="formparentcontainer">
            <h1 className="creator-title" > Edit your Product or Service</h1>
            <hr />
            <form className="product-form" onSubmit={this.handlerSubmit}>
                <h5> Fill in the product/service name </h5>
              <input type="text" name="name" value={this.state.name} required onChange={this.updateName} /> 
              <h5> Select the Product Language </h5>
              <Select // change placeholder to the current lang based on Product
                  value = {this.state.displayLang}
                  onChange={this.updateLang}
                  classNamePrefix="select"
                  options={this.props.langOptions.map((item) => ({value: item.id, label: item.name}))} 
                  />
              <h5> Product/Service Description: </h5>
              <textarea className ="product-description"  onChange={this.updateDescription} value={this.state.description}> </textarea> 
              <button type="submit" className="btn-login">
                  Submit
                </button>
            </form>
          </div>
        </Container>
        </>
      );
    }
  }

export default withRouter(AdminProductEditor);
