import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const ForgotPassword = () => {
  const { currentLanguage } = useContext(LanguagesContext);
  return (
    <div>
      <Container>
        <div className="formparentcontainer">
          <div className="formchildcontainer">
            <h1 id="h1-login">{translations[currentLanguage].ForgotPassword.Title}</h1>
            <hr />
            <p>
              {translations[currentLanguage].ForgotPassword.Text}
            </p>
            <form>
              <input
                type="text"
                title="email"
                placeholder=" Enter your email address"
              />
              <br />

              <Link to="/Learners/LogIn">
                <button type="submit" className="btn-login">
                  {translations[currentLanguage].ForgotPassword.Button}
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ForgotPassword;
