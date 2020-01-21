import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext, { availableLanguages } from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const ContactUs = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <div>
      <Container>
        <div className="formparentcontainer">
          <div className="formchildcontainer">
            <h1>{translations[currentLanguage].ContactUs.Title}</h1>
            <hr />
            <h2>{translations[currentLanguage].ContactUs.Feedback}</h2>
            <form>
              <input type="text" title="name" placeholder="Name*" />
              <br />
              <input type="text" title="email" placeholder="Email*" />
              <br />
              <input
                type="text"
                title="name"
                placeholder="Phone number (optional)"
              />
              <br />
              <input type="text" title="email" placeholder="Message*" />
              <br />
              <Link to="/Learners/QuizList/QuizList">
                <button type="submit" className="btn-login">
                  {translations[currentLanguage].ContactUs.Button}
                </button>
              </Link>
              <br />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ContactUs;
