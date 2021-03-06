import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './AdminDocEditor.css';
import LanguagesContext from '../contexts/languages-context';
import translations from '../i18n/translations';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      flash: ""
    };
  }

  inputHandeler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //Validation form
  validate = currentLanguage => {
    let isError = false;
    const errors = {
      emailError: "",
      passwordError: ""
    };

    if (this.state.email === "") {
      isError = true;
      errors.emailError = translations[currentLanguage].Login.ErrorEmail;
    } else if (this.state.password === "") {
      isError = true;
      errors.passwordError = translations[currentLanguage].Login.ErrorPassword;
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  handlerSubmit = (e, currentLanguage) => {
    e.preventDefault();
    const { email, password } = this.state;
    const err = this.validate(currentLanguage);

    if (!err) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/auth/loginadim`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "Preferred-Language": currentLanguage
        }),
        body: JSON.stringify({ email, password })
      })
        .then(res => res.json())
        .then(res =>
          this.setState({ flash: res.flash }, () => {
            if (res.token) {
              localStorage.setItem("token", JSON.stringify(res.token));
              this.props.history.push("/admin");
            } else if (res.status === 201) {
              setTimeout(() => {
                this.props.history.push("/admin");
             }, 2000)
             } 
          })
        );
    }
  };

  render() {
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <Container>
            <div className="formparentcontainer">
              <div className="formchildcontainer">
                <h1 id="h1-login">
                  {translations[currentLanguage].Login.Title}
                </h1>
                <hr />
                <form onSubmit={e => this.handlerSubmit(e, currentLanguage)}>
                  <input
                    type="email"
                    name="email"
                    placeholder={
                      translations[currentLanguage].Login.PlaceholderU
                    }
                    onChange={e => this.inputHandeler(e)}
                  />
                  <br />
                  {this.state.emailError}
                  <input
                    type="password"
                    name="password"
                    placeholder={
                      translations[currentLanguage].Login.PlaceholderP
                    }
                    onChange={e => this.inputHandeler(e)}
                  />
                  <br />
                  {this.state.passwordError}
                  <button type="submit" className="btn-login">
                    {translations[currentLanguage].Login.ButtonL}
                  </button>
                  {this.state.flash}
                </form>
              </div>
            </div>
          </Container>
        )}
      </LanguagesContext.Consumer>
    );
  }
}

export default withRouter(AdminLogin);
