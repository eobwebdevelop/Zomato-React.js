import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LanguagesContext from '../../contexts/languages-context';
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
            <form>
              <input type="text" title="name" placeholder={translations[currentLanguage].ContactUs.PlaceholderN} />
              <br />
              <input type="text" title="email" placeholder={translations[currentLanguage].ContactUs.PlaceholderE} />
              <br />
              <input
                type="text"
                title="name"
                placeholder={translations[currentLanguage].ContactUs.PlaceholderP}
              />
              <br />
              <input type="text" title="email" placeholder={translations[currentLanguage].ContactUs.PlaceholderM} />
              <br />
              <Link to="/learners/quiz_list/quiz_list">
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
