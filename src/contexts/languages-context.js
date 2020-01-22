import { createContext } from 'react';

export const availableLanguages = {
  English: 'English',
  pt: 'pt',
};

const LanguagesContext = createContext(null);

export default LanguagesContext;
