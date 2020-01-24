import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Select from "react-select";
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';




class SignUp extends Component  {
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
      restaurant_id: '',
      restaurantError: '',
      restaurants: [{id:0, name:''}],
      displayresto: '',
      flash: ''
    }
  }




inputHandeler = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};


//validate 

validate = () => {
   let isError = false;
   const errors = {
    first_nameError: "",
    last_nameError: "",
    emailError: "",
    phone_numberError: "",
    restaurantError: "",
    passwordError: "",
    confPasswordError: ""
  };

   if (this.state.first_name.length == '') {
    isError = true;
    errors.first_nameError = "Fill your name, please";
  } else if (this.state.last_name.length == '') {
    isError = true;
    errors.last_nameError = "Fill your last name, please";
  } else if (this.state.email.indexOf("@") === -1) {
    isError = true;
    errors.emailError = "Requires valid email";
  } else if (this.state.phone_number == '') {
    isError = true;
    errors.phone_numberError = "Fill your phone, please";
  } else if (this.state.restaurant_id == '') {
    isError = true;
    errors.restaurantError = "Fill your restaurant, please";
  } else if (this.state.password == '') {
      isError = true;
      errors.passwordError = "Fill password, please";
  } else if (this.state.password !== this.state.confPassword) {
      isError = true;
      errors.confPasswordError = "Passwords need to match";
  } 
    
    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
}


  
  //Fix the selectors
  
  updateRestaurant = (item) => {
    this.setState({restaurant_id: item.value,
    displayresto: item})
}


  handlerSubmit = (e) => {
    const { first_name, last_name, email, password, phone_number, restaurant_id } = this.state
    console.log(first_name, last_name, email, password, phone_number, restaurant_id)
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      fetch("http://localhost:3000/auth/signup",
      {
          method:  'POST',
          headers:  new Headers({
                  'Content-Type':  'application/json'
          }),
          body:  JSON.stringify({first_name, last_name, email, password, phone_number, restaurant_id}),
      })
      .then(res  =>  res.json())
      .then(
          res  =>  this.setState({"flash":  res.flash}),
          err  =>  this.setState({"flash":  err.flash})
      )
    }

  }


  render() {
    
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage, onChangeLanguage }) => (
        <Container>
          <div class="formparentcontainer">
            <h1 id="h1-login"> {translations[currentLanguage].SignUp.Title} </h1>
            <hr />
            <form class="signup-form" onSubmit={this.handlerSubmit}>
              <h5>{translations[currentLanguage].SignUp.SubtitleD}</h5>
              <input type="text" name="first_name" placeholder={translations[currentLanguage].SignUp.PlaceholderF} onChange={e => this.inputHandeler(e)} /> 
              {this.state.first_nameError}
              <input type="text" name="last_name" placeholder={translations[currentLanguage].SignUp.PlaceholderL}  onChange={e => this.inputHandeler(e)}/>
              {this.state.last_nameError}
              <input type="email" name="email" placeholder={translations[currentLanguage].SignUp.PlaceholderE} onChange={e => this.inputHandeler(e)}/>
              {this.state.emailError}
              <input type="text" name="phone_number" placeholder={translations[currentLanguage].SignUp.PlaceholderN} onChange={e => this.inputHandeler(e)}/>
              {this.state.phone_numberError}
              <br /> <br />
              <h5>{translations[currentLanguage].SignUp.SubtitleR}</h5>
              <Select
                placeholder = {translations[currentLanguage].SignUp.PlaceholderS}
                value = {this.state.displayresto}
                onChange={this.updateRestaurant}
                classNamePrefix="select"
                options={this.props.restaurants.map((item) => ({value: item.id, label: item.name}))}
                />
                {this.state.restaurantError}
              <br /> <br />
              <h5>{translations[currentLanguage].SignUp.SubtitleP}</h5>
              <input 
                type="password"
                name="password" 
                placeholder={translations[currentLanguage].SignUp.PlaceholderP} 
                onChange={e => this.inputHandeler(e)}
              />
              {this.state.passwordError}
              <br />
              <input
                type="password"
                name="confPassword"
                placeholder={translations[currentLanguage].SignUp.PlaceholderC}
                onChange={e => this.inputHandeler(e)}
              />
              {this.state.confPasswordError}
              <br />
                <button type="submit" class="btn-login">
                {translations[currentLanguage].SignUp.Button}
                </button>
                {this.state.flash}
            </form>
          </div>
        </Container>
      )}
      </LanguagesContext.Consumer>
    );
  }
}
export default SignUp;
