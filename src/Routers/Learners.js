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
            <LearnerNav
              currentUser={props.currentUser}
              token={props.token}
              clearTokenLogOut={props.clearTokenLogOut}
            />
            <Documentation learnerDoc={props.learnerDoc} />
          </>
        )}
      />

      {/* ContactUs */}

      <Route
        exact
        path="/learners/about"
        render={() => (
          <>
            <LearnerNav
              currentUser={props.currentUser}
              token={props.token}
              clearTokenLogOut={props.clearTokenLogOut}
            />
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
            <LearnerNav
              currentUser={props.currentUser}
              token={props.token}
              clearTokenLogOut={props.clearTokenLogOut}
            />
            <FAQ learnerFaq={props.learnerFaq} />
          </>
        )}
      />
      {/* Quiz_list */}
      <Route
        exact
        path="/learners/quiz_list"
        render={() => (
          <>
            <LearnerNav
              currentUser={props.currentUser}
              token={props.token}
              clearTokenLogOut={props.clearTokenLogOut}
            />
            <QuizList
              QuizList={props.QuizList}
              changeQuizIDInPlay={props.changeQuizIDInPlay}
              refreshQuizState={props.refreshQuizState}
              token={props.token}
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
            <LearnerNav
              currentUser={props.currentUser}
              token={props.token}
              clearTokenLogOut={props.clearTokenLogOut}
            />
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
