import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LanguagesContext, { availableLanguages } from './contexts/languages-context';
import translations from './i18n/translations';


const LanguageSelector = () => {
  const { currentLanguage, onChangeLanguage } = useContext(LanguagesContext);

  return (
    <>
      <Link to="/">{translations[currentLanguage].back}</Link>
      <h1>{translations[currentLanguage].settings}</h1>
      <select
        name="language"
        defaultValue={currentLanguage}
        onChange={onChangeLanguage}
      >
        {
                    Object.values(availableLanguages).map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))
                }
      </select>
    </>
  );
};

export default LanguageSelector;


// import React from 'react';

// import { Dropdown } from 'semantic-ui-react';

// const languageOptions = [
//  { key: 'English', text: 'English', value: 'English' },
//  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },

// ];

// const DropdownSelector = () => (
// <Dropdown
//    button
//   className="icon"
//   floating
//   labeled
//   icon="world"
//   options={languageOptions}
//   text="English"
// />

// );


// export default DropdownSelector;
