import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import QuizCard from './QuizCard';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';

const QuizList = (props) => {
  const { currentLanguage } = useContext(LanguagesContext);
  return (
    <>
      <div>
        <Container>
          <h1>{translations[currentLanguage].QuizList.Title}</h1>
          <hr />

          {props.QuizList.map((el, i) => (
            <QuizCard
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
