import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import QuizCard from "./QuizCard";
import LanguagesContext from "../../contexts/languages-context";
import translations from "../../i18n/translations";
import { Link } from "react-router-dom";

const QuizList = props => {
  useEffect(() => {
    props.refreshQuizState();
  }, []);

  const { currentLanguage } = useContext(LanguagesContext);

  if (props.QuizList === undefined)
    return (
      <Container>
        <h1>{translations[currentLanguage].QuizList.Title}</h1>
        <hr />
        <h1>{translations[currentLanguage].QuizList.Error}</h1>
      </Container>
    );

  if (props.QuizList.length === 0) return <Container></Container>;

  return (
    <>
      <div>
        <Container>
          <div class="quizlist-container">
            <div class="parent-documentationhero">
              <div class="div1-documentationhero-image"></div>
              <div class="div2-documentationhero-text">
                {" "}
                <h1> {translations[currentLanguage].QuizList.HeroTitle}</h1>
                <p>{translations[currentLanguage].QuizList.HeroText}</p>
              </div>
              <div class="div3-documentationhero-button">
                {" "}
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
