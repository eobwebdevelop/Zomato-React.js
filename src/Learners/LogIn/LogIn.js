import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import LanguagesContext, {
  availableLanguages
} from "../../contexts/languages-context";
import translations from "../../i18n/translations";

class LogIn extends Component {
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
  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      passwordError: ""
    };

    if (this.state.email == "") {
      isError = true;
      errors.emailError = "Fill your email, please";
    } else if (this.state.password == "") {
      isError = true;
      errors.passwordError = "Fill your password, please";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  handlerSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(this.state.email, this.state.password);
    const err = this.validate();
    if (!err) {
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ email, password })
      })
        .then(res => res.json())
        .then(
          res =>
            this.setState({ flash: res.flash }, () => {
              localStorage.setItem("token", JSON.stringify(res.token));
            }),
          err => this.setState({ flash: err.flash })
        );
    }
  };
  render() {
    return (
      <LanguagesContext>
        {({ currentLanguage, onChangeLanguage }) => (
          <Container>
            <div className="formparentcontainer">
              <div className="formchildcontainer">
                <h1 id="h1-login">
                  {translations[currentLanguage].Login.Title}
                </h1>
                <hr />
                <form onSubmit={this.handlerSubmit}>
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
              <div className="forgotpassword-signup">
                <Link to="/Learners/LogIn/ForgotPassword">
                  {translations[currentLanguage].Login.Forgot}
                  <br />
                </Link>
                {translations[currentLanguage].Login.Account}{" "}
                <Link to="/Learners/SignUp/SignUp">
                  {translations[currentLanguage].Login.ButtonS}
                </Link>
              </div>
            </div>
          </Container>
        )}
      </LanguagesContext>
    );
  }
}

export default LogIn;
