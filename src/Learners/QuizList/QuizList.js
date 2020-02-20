import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
        <h1>Loading...</h1>
      </Container>
    );
  }

  if (props.QuizList.length === 0) {
    return (
      <Container>
        <h1>{translations[currentLanguage].QuizList.Title}</h1>
        <hr />
        <h1>{translations[currentLanguage].QuizList.Error}</h1>
      </Container>
    );
  }

  return (
    <>
      <div>
        <Container>
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
        </Container>
      </div>
    </>
  );
};
export default QuizList;
