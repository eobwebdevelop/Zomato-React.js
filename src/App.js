import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";

import AdminApp from "./Admin/AdminApp";
import DocHost from "./Admin/DocHost";
import QA from "./Admin/QA";
import QuizzMaker from "./Admin/QuizzMaker";
import QuizzUpdate from "./Admin/QuizzUpdate";

import ContactUs from "./Learners/ContactUs/ContactUs";
import DocsSection from "./Learners/Documentation/DocsSection";
import Documentation from "./Learners/Documentation/Documentation";
import LogIn from "./Learners/LogIn/LogIn";
import MainPage from "./Learners/MainPage/MainPage";
import QuizList from "./Learners/QuizList/QuizList";
import Answer from "./Learners/Quizz/Answer";
import Quizz from "./Learners/Quizz/Quizz";
import Question from "./Learners/Quizz/Question";
import Results from "./Learners/Quizz/Results";
import SignUp from "./Learners/SignUp/SignUp";
import LearnerNav from "./LearnerNav.js";
import AdminNav from "./AdminNav.js";

function App() {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => (
          <>
            Are you a <a href="/Learners/MainPage/MainPage">learner</a> or an{" "}
            <a href="/Admin/AdminApp">administrator</a>?
          </>
        )}
      />
      {/* Admin Route */}
      {/* <NavBar newUser={this.getUser} /> */}
      <Route
        exact
        path="/Admin/AdminApp"
        render={() => (
          <>
            <AdminNav />
            <AdminApp />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/DocHost"
        render={() => (
          <>
            <AdminNav />
            <DocHost />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/QA"
        render={() => (
          <>
            <AdminNav />
            <QA />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/QuizzMaker"
        render={() => (
          <>
            <AdminNav />
            <QuizzMaker />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/QuizzUpdate"
        render={() => (
          <>
            <AdminNav />
            <QuizzUpdate />
          </>
        )}
      />
      {/* Learners Route */}
      <Route
        exact
        path="/Learners/ContactUs/ContactUs"
        render={() => (
          <>
            <LearnerNav />
            <ContactUs />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/Documentation/Documentation"
        render={() => (
          <>
            <LearnerNav />
            <Documentation />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/Documentation/DocsSection"
        render={() => (
          <>
            <LearnerNav />
            <DocsSection />
          </>
        )}
      />
      <Route exact path="/Learners/LogIn/LogIn" render={() => <LogIn />} />
      <Route
        exact
        path="/Learners/MainPage/MainPage"
        render={() => (
          <>
            <LearnerNav />
            <MainPage />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/QuizList/QuizList"
        render={() => (
          <>
            <LearnerNav />
            <QuizList />
          </>
        )}
      />
      <Route exact path="/Learners/Quizz/Answer" render={() => <Answer />} />
      <Route
        exact
        path="/Learners/Quizz/Question"
        render={() => (
          <>
            <LearnerNav />
            <Question />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/Quizz/Quizz"
        render={() => (
          <>
            <LearnerNav />
            <Quizz />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/Quizz/Results"
        render={() => (
          <>
            <LearnerNav />
            <Results />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/SignUp/SignUp"
        render={() => (
          <>
            <LearnerNav />
            <SignUp />
          </>
        )}
      />
    </>
  );
}

export default App;
