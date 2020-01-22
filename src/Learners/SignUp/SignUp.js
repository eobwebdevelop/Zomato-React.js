import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import DropDown from "./DropDown.js";




class SignUp extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      first_name: 'elena',
      last_name: 'ortega',
      email: 'elena@hola.com',
      password: 'holi',
      phone_number: '99333883',
      restaurant_id: '',
      user_type_id: '',
      user_type: [{ id:0, name:"" }],
      restaurants: [{id:0, name:''}],
    }
  }


getUserType = () => {
  fetch('http://localhost:3000/admin/user/type')
    .then(response => response.json())
    .then(data => {
      this.setState( (state) => ({ 
        ...state,
        user_type: data.user_type,
      }))
    })
};


getRestaurants= () => {
  fetch('http://localhost:3000/admin/restaurant')
    .then(response => response.json())
    .then(data => {
      this.setState( (state) => ({ 
        ...state,
        restaurants: data.Restaurant
      }))
    })
};

componentDidMount(){
  this.getUserType();
  this.getRestaurants();
};




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
  
  updateRestaurant = (item) => {
    this.setState({restaurant_id: item})
  }
  updateUserType = (item) => {
    this.setState({user_type_id: item})
  }

  handlerSubmit = (e) => {
    const { first_name, last_name, email, password, phone_number, user_type_id, restaurant_id } = this.state
    e.preventDefault();
    console.log("the form has been submited with these fields:", first_name, last_name, email, password, phone_number, user_type_id.id );
    fetch("http://localhost:3000/auth/signup",
    {
        method:  'POST',
        headers:  new Headers({
                'Content-Type':  'application/json'
        }),
        body:  JSON.stringify(first_name, last_name, email, password, phone_number, user_type_id.id, restaurant_id.restaurant_id),
    })
    .then(res  =>  res.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    ) 
  }


  render() {
    console.log(this.state.restaurant_id)
    
    return (
      <>
        <Container>
          <div class="formparentcontainer">
            <h1 id="h1-login"> Sign-Up </h1>
            <hr />
            <form class="signup-form" onSubmit={this.handlerSubmit}>
              <h5>Personal Details:</h5>
              <input type="text" name="firstname" placeholder=" First Name*" required onChange={this.updateFirstname} /> 
              <input type="text" name="last name" placeholder=" Last Name*"  required onChange={this.updateLastName}/>
              <input type="email" name="email" placeholder=" Email*" required onChange={this.updateEmail}/>
              <input type="text" name="phone" placeholder=" Phone Number" onChange={this.updateNumber}/>
              <br /> <br />
              <h5>Location:</h5>
              <DropDown 
                restaurants={this.state.restaurants} 
                handleRestaurant={this.updateRestaurant}
                chosenRestaurant={this.state.restaurant_id}

                userType={this.state.user_type}
                ChosenType={this.state.user_type_id}
                handleUserType={this.updateUserType} />
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
