import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import RegionDropDown from "./RegionDropDown.js";


const Regions = [
  {
    key: "Greater Lisbon",
    text: "Greater Lisbon",
    value: "Greater Lisbon"
  },
  {
    key: "Porto",
    text: "Porto",
    value: "Porto"
  },
  {
    key: "Algarve",
    text: "Algarve",
    value: "Algarve"
  }
];

const UserType = [
  {
    key: "Restauranter",
    text: "Restauranter",
    value: "Restauranter"
  },
  {
    key: "Restauraunt Employee",
    text: "Restauraunt Employee",
    value: "Restauraunt Employee"
  },
  {
    key: "Zomato HQ Employee",
    text: "Zomato HQ Employee",
    value: "Zomato HQ Employee"
  }
];

class SignUp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      first_name: 'elena',
      last_name: 'ortega',
      email: 'elena@hola.com',
      password: 'holi',
      phone_number: '99333883',
      user_type_id: '2',
      region_id: '1'
    }
  }

  updateFirstname = (event) => {
    this.setState({first_name: event.target.value})
  }
  updateLastName = (event) => {
    this.setState({last_name: event.target.value})
  }
  updateEmail = (event) => {
    this.setState({email: event.target.value})
  }
  updateNumber = (event) => {
    this.setState({phone_number: event.target.value})
  }

  updatePassword = (event) => {
    this.setState({password: event.target.value})
  }
  
  //Fix the selectors
  updateRegionId = (event) => {
    this.setState({region_id: event.target.value})
  }
  updateUserType = (event) => {
    this.setState({user_type_id: event.target.value})
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    console.log("the form has been submited with these fields:", this.state );
    fetch(process.env.REACT_APP_PATH_AUTH_SIGNUP,
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify(this.state),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
  }


  render() {
    return (
      <>
        <Container>
          <div class="formparentcontainer">
            <h1 id="h1-login"> Sign-Up </h1>
            <hr />
            <form class="signup-form" onSubmit={this.handlerSubmit}>
              <h5>Personal Details:</h5>
              <input type="text" name="firstname" placeholder=" First Name*" required onChange={this.updateFirstname} /> 
              <input type="text" name="lastname" placeholder=" Last Name*"  required onChange={this.updateLastName}/>
              <input type="email" name="email" placeholder=" Email*" required onChange={this.updateEmail}/>
              <input type="text" name="phone" placeholder=" Phone Number" onChange={this.updateNumber}/>
              <br /> <br />
              <h5>Location:</h5>
              <RegionDropDown selectOptions={Regions} onChange={this.updateUserType} placeholder=" Your region" />
              <br />
              <h5>Zomato Information:</h5>
              <RegionDropDown
                selectOptions={UserType}
                placeholder=" Are you a... *"
                onChange={this.updateUserType}
              />
              <input
                type="text"
                name="restaurant"
                placeholder=" Restaurant (If applicable)"
              />
              <br /> <br />
              <h5>Password:</h5>
              <input type="password" name="password" placeholder=" Password*" onChange={this.updatePassword}/>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Confirm Password*"
              />
              <br />
                <button type="submit" class="btn-login">
                  Sign-Up
                </button>
            </form>
          </div>
        </Container>
      </>
    );
  }
}
export default SignUp;
