import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QuizCard from './QuizCard';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';

const QuizList = (props) => {
  useEffect(() => {
    props.refreshQuizState();
  }, []);

  const { currentLanguage } = useContext(LanguagesContext);

  if (props.QuizList === undefined) {
    return (
      <Container>
        <h1>{translations[currentLanguage].QuizList.Title}</h1>
        <hr />
        <h1>{translations[currentLanguage].QuizList.Error}</h1>
      </Container>
    );
  }

  if (props.QuizList.length === 0) return <Container />;

  return (
    <>
      <div>
        <Container>
          <div className="quizlist-container">
            <div className="parent-documentationhero">
              <div className="div1-documentationhero-image" />
              <div className="div2-documentationhero-text">
                {' '}
                <h1>
                  {' '}
                  {translations[currentLanguage].QuizList.HeroTitle}
                </h1>
                <p>{translations[currentLanguage].QuizList.HeroText}</p>
              </div>
              <div className="div3-documentationhero-button">
                {' '}
                <Link to="/learners/documentation">
                  <button type="submit" className="btn">
                    {translations[currentLanguage].QuizList.LinkD}
                  </button>
                </Link>
              </div>
            </div>
            <h1>{translations[currentLanguage].QuizList.Title}</h1>
            <hr />

            {props.QuizList.map((el, i) => (
              <QuizCard
                key={i}
                quizTitle={el.name}
                quizLinkText={translations[currentLanguage].QuizList.LinkQ}
                documentationLinkText={
                  translations[currentLanguage].QuizList.LinkD
                }
                quizID={el.id}
                changeQuizIDInPlay={props.changeQuizIDInPlay}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};
export default QuizList;

