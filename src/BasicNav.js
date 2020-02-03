import React, { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DropdownSelector from './LanguageSelector';
import './BasicNav.css';
import LanguagesContext, {
  availableLanguages,
} from './contexts/languages-context';
import translations from './i18n/translations';

const BasicNav = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <div>
      <Navbar className="learner-navbar" bg="tyrolean" expand="lg">
        <Navbar.Brand href="/learners/quiz_list">
          <img src="https://res.cloudinary.com/dpjc4trmq/image/upload/c_scale,w_130/v1578418844/i1fqkqecbismsg8o7w7b.png" alt="Zomato logo" />
        </Navbar.Brand>
        <DropdownSelector />
      </Navbar>
    </div>
  );
};
export default BasicNav;
