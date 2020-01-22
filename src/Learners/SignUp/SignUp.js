import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import RegionDropDown from "./RegionDropDown.js";
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';


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
    fetch("http://localhost:3000/auth/signup",
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
      <LanguagesContext.Consumer>
        {({ currentLanguage, onChangeLanguage }) => (
        <Container>
          <div class="formparentcontainer">
            <h1 id="h1-login"> {translations[currentLanguage].SignUp.Title} </h1>
            <hr />
            <form class="signup-form" onSubmit={this.handlerSubmit}>
              <h5>{translations[currentLanguage].SignUp.SubtitleD}</h5>
              <input type="text" name="firstname" placeholder={translations[currentLanguage].SignUp.PlaceholderF} required onChange={this.updateFirstname} /> 
              <input type="text" name="lastname" placeholder={translations[currentLanguage].SignUp.PlaceholderL}  required onChange={this.updateLastName}/>
              <input type="email" name="email" placeholder={translations[currentLanguage].SignUp.PlaceholderE} required onChange={this.updateEmail}/>
              <input type="text" name="phone" placeholder={translations[currentLanguage].SignUp.PlaceholderN} onChange={this.updateNumber}/>
              <br /> <br />
              <h5>{translations[currentLanguage].SignUp.SubtitleL}</h5>
              <RegionDropDown selectOptions={Regions} onChange={this.updateUserType} placeholder={translations[currentLanguage].SignUp.PlaceholderR} />
              <br />
              <h5>{translations[currentLanguage].SignUp.SubtitleI}</h5>
              <RegionDropDown
                selectOptions={UserType}
                placeholder={translations[currentLanguage].SignUp.PlaceholderA}
                onChange={this.updateUserType}
              />
              <input
                type="text"
                name="restaurant"
                placeholder={translations[currentLanguage].SignUp.PlaceholderR}
              />
              <br /> <br />
              <h5>{translations[currentLanguage].SignUp.SubtitleP}</h5>
              <input 
                type="password"
                name="password" 
                placeholder={translations[currentLanguage].SignUp.PlaceholderP} 
                onChange={this.updatePassword}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder={translations[currentLanguage].SignUp.PlaceholderC} 
              />
              <br />
                <button type="submit" class="btn-login">
                {translations[currentLanguage].SignUp.Button}
                </button>
            </form>
          </div>
        </Container>
      )}
      </LanguagesContext.Consumer>
    );
  }
}
export default SignUp;
