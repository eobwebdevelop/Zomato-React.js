import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';


const FAQ = () => {
  const { currentLanguage } = useContext(LanguagesContext);

  return (
    <Container>
      <div>
        <h1>{translations[currentLanguage].FAQ.Title}</h1>
        <hr />
        <h2>Question 1?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
        </p>
        <h2>Question 2?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
        </p>
        <h2>Question 3?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor.
        </p>
        <h2>Question 4?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor.
        </p>
      </div>
    </Container>

  );
};

export default FAQ;
