import { createContext } from 'react';

export const availableLanguages = {
    en: 'en',
    pt: 'pt'
};

const LanguagesContext = createContext(null);

export default LanguagesContext;