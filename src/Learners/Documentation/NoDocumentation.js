import React, { useContext } from 'react';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';

const NoDocumentation = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <h1>
      {' '}
      {translations[currentLanguage].Documentation.h1}
    </h1>
  );
};
export default NoDocumentation;
