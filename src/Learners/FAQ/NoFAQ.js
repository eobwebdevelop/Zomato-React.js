import React, { useContext } from 'react';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';

const NoFaq = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <h1>
      {' '}
      {translations[currentLanguage].NoFaq.h1}
    </h1>
  );
};


export default NoFaq;
