import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import AdminNav from "./AdminNav.js";

import AdminApp from "./Admin/AdminApp";
import DocHost from "./Admin/DocHost";
import QA from "./Admin/QA";
import QuizMaker from "./Admin/QuizMaker";
import QuizUpdate from "./Admin/QuizUpdate";

import LearnerNav from "./LearnerNav.js";

import ContactUs from "./Learners/ContactUs/ContactUs";

import Documentation from "./Learners/Documentation/Documentation";
import LogIn from "./Learners/LogIn/LogIn";
import ForgotPassword from "./Learners/LogIn/ForgotPassword";

import QuizList from "./Learners/QuizList/QuizList";
import Answer from "./Learners/Quiz/Answer";
import Quiz from "./Learners/Quiz/Quiz";
import Question from "./Learners/Quiz/Question";
import Results from "./Learners/Quiz/Results";
import SignUp from "./Learners/SignUp/SignUp";
import FAQ from "./Learners/FAQ/FAQ.js";

function App() {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => (
          <>
            Are you a <a href="/Learners/Login/Login">learner</a> or an{" "}
            <a href="/Admin/AdminApp">administrator</a>?
          </>
        )}
      />
      {/* Admin Route */}
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
        path="/Admin/QuizMaker"
        render={() => (
          <>
            <AdminNav />
            <QuizMaker />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/QuizUpdate"
        render={() => (
          <>
            <AdminNav />
            <QuizUpdate />
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
        path="/Learners/FAQ/FAQ"
        render={() => (
          <>
            <LearnerNav />
            <FAQ />
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
        path="/Learners/LogIn/LogIn"
        render={() => (
          <>
            <LearnerNav />
            <LogIn />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/LogIn/ForgotPassword"
        render={() => (
          <>
            <LearnerNav />
            <ForgotPassword />
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
      <Route
        exact
        path="/Learners/Quiz/Answer"
        render={() => (
          <>
            <LearnerNav />
            <Answer />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/Quiz/Question"
        render={() => (
          <>
            <LearnerNav />
            <Question />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/Quiz/Quiz"
        render={() => (
          <>
            <LearnerNav />
            <Quiz />
          </>
        )}
      />
      <Route
        exact
        path="/Learners/Quiz/Results"
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
