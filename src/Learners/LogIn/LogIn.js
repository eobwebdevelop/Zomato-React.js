import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
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

  handleLogin = (e, currentLanguage) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { onLogin } = this.props;
    const err = this.validate(currentLanguage);

    if(!err) {
      onLogin(email, password);
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
                <form onSubmit={e => this.handleLogin(e, currentLanguage)}>
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
                  {this.props.flash}
                </form>
              </div>
              <div className="forgotpassword-signup">
                {/* future feature */}
                {/* <Link to="/learners/login/forgot_password">
                  {translations[currentLanguage].Login.Forgot}
                  <br />
                </Link> */}
                {translations[currentLanguage].Login.Account}{" "}
                <Link to="/learners/signup">
                  {translations[currentLanguage].Login.ButtonS}
                </Link>
              </div>
            </div>
          </Container>
        )}
      </LanguagesContext.Consumer>
    );
  }
}

export default withRouter(LogIn);
