import React, { useContext } from 'react';
//import { Link } from 'react-router-dom';
import LanguagesContext, { availableLanguages } from './contexts/languages-context';
import translations from './i18n/translations';
//import { Dropdown } from 'semantic-ui-react';


const LanguageSelector = () => {
  const { currentLanguage, onChangeLanguage } = useContext(LanguagesContext);

  return (
    <>
      <select
        name="language"
        value={currentLanguage}
        onChange={onChangeLanguage}
        className="ui button floating labeled search dropdown icon"
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
