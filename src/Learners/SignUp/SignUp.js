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
      first_name: 'elena',
      last_name: 'ortega',
      email: 'elena@hola.com',
      password: 'holi',
      phone_number: '99333883',
      restaurant_id: '',
      user_type_id: '2',
      restaurants: [{id:0, name:''}],
      displayresto: '',
    }
  }


getRestaurants = () => {
  fetch('http://localhost:3000/admin/restaurant')
    .then(response => response.json())
    .then(data => {
      this.setState( (state) => ({ 
        ...state,
        restaurants: data.Restaurant,
      }))
    })
};
componentDidMount(){
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
    this.setState({restaurant_id: item.value,
    displayresto: item})
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
              <h5>{translations[currentLanguage].SignUp.SubtitleR}</h5>
              <Select
                placeholder = {translations[currentLanguage].SignUp.PlaceholderS}
                value = {this.state.displayresto}
                onChange={this.updateRestaurant}
                classNamePrefix="select"
                options={this.state.restaurants.map((item) => ({value: item.id, label: item.name}))}
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
