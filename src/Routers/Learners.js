import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
// Learners
import Documentation from "../Learners/Documentation/Documentation";
import LearnerNav from "../LearnerNav";
import About from "../Learners/About/About";
import FAQ from "../Learners/FAQ/FAQ";
import Challenge from "../Learners/Challenge/Challenge";
import QuizList from "../Learners/QuizList/QuizList";

const Learners = props => (
  <>
    <Switch>
      {/* Documentation */}
      <Route
        exact
        path="/learners/documentation"
        render={() => (
          <>
          <LearnerNav currentUser={props.currentUser}/>
          <Documentation documentation={props.documentation} />
          </>
        )}
      />

      {/* ContactUs */}

      <Route
        exact
        path="/learners/about"
        render={() => (
          <>
            <LearnerNav currentUser={props.currentUser}/>   
            <About />
          </>
        )}
      />

      {/* FAQ */}
      <Route
        exact
        path="/learners/faq"
        render={() => (
          <>
            <LearnerNav currentUser={props.currentUser}/>
            <FAQ />
          </>
        )}
      />
      {/* Quiz_list */}
      <Route
        exact
        path="/learners/quiz_list"
        render={() => (        
          <>  
            <LearnerNav currentUser={props.currentUser}/>
            <QuizList
              QuizList={props.QuizList}
              changeQuizIDInPlay={props.changeQuizIDInPlay}
              refreshQuizState={props.refreshQuizState}
            />
          </>
        )}
      />

      {/* Quiz Challege */}
      <Route
        exact
        path="/learners/quiz_list/quiz"
        render={() => (
            <>
            <LearnerNav currentUser={props.currentUser}/>
            <Challenge
              score={props.score}
              checkScore={props.checkScore}
              refreshQuizState={props.refreshQuizState}
              questionPackage={props.questionPackage}
              startOverallTimer={props.startOverallTimer}
              overallTime={props.overallTime}
              onNextStep={props.onNextStep}
              onClickAnswer={props.onClickAnswer}
              step={props.step}
              quizIDInPlay={props.quizIDInPlay}
              stopTimer={props.stopTimer}
              userAnswerClick={props.userAnswerClick}
              userQuizAnswers={props.userQuizAnswers}
              addUserInputToState={props.addUserInputToState}
              incrementQuizStep={props.incrementQuizStep}
              postQuizResult={props.postQuizResult}
              reduceQuizStep={props.reduceQuizStep}
            />
          </>
        )}
      />
    </Switch>
  </>
);

export default Learners;
