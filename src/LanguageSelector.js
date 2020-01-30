import React, { useContext } from 'react';
import LanguagesContext, { availableLanguages } from './contexts/languages-context';
import translations from './i18n/translations';


const LanguageSelector = () => {
  const { currentLanguage, onChangeLanguage } = useContext(LanguagesContext);

  return (
    <>
      <select
        name="language"
        value={currentLanguage}
        onChange={onChangeLanguage}
        className="ui button labeled search dropdown icon"
      >
        {
          Object.values(availableLanguages).map((lang) => (
            <option key={lang} value={lang}>{translations[lang].Full}</option>
          ))
      }
      </select>
    </>
  );
};

export default LanguageSelector;
