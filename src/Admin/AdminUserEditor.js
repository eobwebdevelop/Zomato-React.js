import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withRouter}  from 'react-router-dom';
import Select from 'react-select';

const userType = [
  { value: 1, label: 'Admin' },
{ value: 2, label: 'Zomato Employee' },
{ value: 3, label: 'Restaurant Employee'},
 ]


class AdminUserEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      first_nameError: '',
      last_name: '',
      last_nameError: '',
      email: '',
      emailError: '',
      phone_number: '',
      phone_numberError: '',
      password: '',
      passwordError: '',
      confPassword: '',
      confPasswordError: '',
      displayresto: '',
      flash: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        password: this.props.user.password,
        phone_number: this.props.user.phone_number,
        id: this.props.user.id,
        user_type_id: this.props.user_type_id,
      })
    }
  }

  updateFirstName = (event) => {
    this.setState({first_name: event.target.value})
  }
  updateLastName = (event) => {
    this.setState({last_name: event.target.value})
  }

  updateEmail = (event) => {
    this.setState({email: event.target.value})
  }
  updatePhone_number = (event) => {
    this.setState({phone_number: event.target.value})
  }
  updatePassword = (event) => {
    this.setState({password: event.target.value})
  }

  handlerSubmit = (e) => {
    const {first_name, last_name, email, phone_number, user_type_id, id } = this.state
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/user/edit`,
    {
        method:  'PUT',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify({email, first_name, last_name, phone_number, user_type_id, id}),
    })
    .then(res  => {
      if (res.status === 200) {
        const editedUser = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          phone_number: this.state.phone_number,
          id: this.state.id,
          user_type_id: this.state.user_type_id,
        }
        this.props.updateUserList(editedUser);
      }
    })
  }

  updateUserType = (item) => {
    this.setState({
    user_type_id: item.value,
    displayuserType:item })
  }

  render() {
    return (
      <>
        <Container>
          <h1>Edit User</h1>
          <hr />
          <p>You are editing {this.state.first_name} {this.state.last_name}</p>
          <div> 
          <form className="user-form" onSubmit={this.handlerSubmit}>
            <h5>User Type: </h5>
            <Select // change placeholder to the current lang based on Product
                  value = {this.state.displayUserType}
                  onChange={this.updateUserType}
                  classNamePrefix="select"
                  options={userType} 
                  />
            <h5> First Name: </h5>
            <input type="text" name="name" value={this.state.first_name} required onChange={this.updateFirstName} /> 
            <h5>Last Name: </h5>
            <input type="text" name="name" value={this.state.last_name} required onChange={this.updateLastName} /> 
            <h5>Email: </h5>
            <input type="text" name="name" value={this.state.email} required onChange={this.updateEmail} />    
            <h5>Phone Number: </h5>
            <input type="text" name="name" value={this.state.phone_number} required onChange={this.updatePhone_number} /> 
          
              <button type="submit" className="btn-login">
                Update
              </button>
            </form>
            </div>
        </Container>
      </>
    );
  }
}

export default withRouter(AdminUserEditor);
