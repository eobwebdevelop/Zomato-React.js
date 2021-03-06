import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import LanguagesContext, {
  availableLanguages,
} from './contexts/languages-context';
import translations from './i18n/translations';

const LanguageSelector = ({ location }) => {
  const { currentLanguage, onChangeLanguage } = useContext(LanguagesContext);
  if (location.pathname === '/learners/quiz_list/quiz') return null;
  if (location.pathname.split('/')[1] === 'admin') return null;

  return (
    <>
      <select
        name="language"
        value={currentLanguage}
        onChange={onChangeLanguage}
        className="ui labeled search dropdown icon changelanguageselector"
      >
        {Object.values(availableLanguages).map((lang) => (
          <option key={lang} value={lang}>
            {translations[lang].Full}
          </option>
        ))}
      </select>
    </>
  );
};


export default withRouter(LanguageSelector);
