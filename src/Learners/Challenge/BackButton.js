import React from 'react';
import translations from '../../i18n/translations';
import LanguagesContext from '../../contexts/languages-context';

class BackButton extends React.Component {
  render() {
    const { reduceQuizStep, isBackButtonShown } = this.props;

    if (isBackButtonShown === 'show') {
      return (
        <LanguagesContext.Consumer>
          {({ currentLanguage }) => (
            <>
              <button className="back-button-quiz" onClick={() => reduceQuizStep()}>
                &#8592;
                {' '}
                {translations[currentLanguage].BackButton.BackButtonText}
              </button>
            </>
          )}
        </LanguagesContext.Consumer>
      );
    } return null;
  }
}
export default BackButton;
