import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const LogIn = () => {
  const { currentLanguage } = useContext(LanguagesContext);
  return (
    <div>
      <Container>
        <div className="formparentcontainer">
          <div className="formchildcontainer">
            <h1 id="h1-login">{translations[currentLanguage].Login.Title}</h1>
            <hr />
            <form>
              <input type="text" title="username" placeholder={translations[currentLanguage].Login.PlaceholderU} />
              <br />
              <input type="password" title="username" placeholder={translations[currentLanguage].Login.PlaceholderP} />
              <br />
              <Link to="/Learners/QuizList/QuizList">
                <button type="submit" className="btn-login">
                  {translations[currentLanguage].Login.ButtonL}
                </button>
              </Link>
            </form>
          </div>
          <div className="forgotpassword-signup">
            <Link to="/Learners/LogIn/ForgotPassword">
              <a id="forgotpassword" href="/Learners/LogIn/ForgotPassword">
                {translations[currentLanguage].Login.Forgot}
                <br />
              </a>
            </Link>
            {translations[currentLanguage].Login.Account}
            {' '}
            <Link to="/Learners/SignUp/SignUp">
              <a id="signup" href="">
                {translations[currentLanguage].Login.ButtonS}
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default LogIn;
