import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import AdminAppLogin from "./Admin/AdminAppLogin";
import AdminDocEditor from "./Admin/AdminDocEditor";
import AdminQuizList from "./Admin/AdminQuizList";
import AdminQuizMaker from "./Admin/AdminQuizMaker";
import AdminQuizUpdate from "./Admin/AdminQuizUpdate";
import AdminUserConfig from "./Admin/AdminUserConfig";

import LearnerNav from "./LearnerNav.js";
import AdminNav from "./AdminNav.js";

import ContactUs from "./Learners/ContactUs/ContactUs";
import Documentation from "./Learners/Documentation/Documentation";
import LogIn from "./Learners/LogIn/LogIn";
import ForgotPassword from "./Learners/LogIn/ForgotPassword";

import QuizList from "./Learners/QuizList/QuizList";
import Answer from "./Learners/Quiz/Answer";
import Quiz from "./Learners/Quiz/Quiz";
import Timer from "./Learners/Quiz/Timer";
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
        render={() => <Redirect to="/Learners/LogIn/LogIn"></Redirect>}
      />
      {/* Admin Route */}
      <Route
        exact
        path="/Admin/AdminAppLogin"
        render={() => (
          <>
            <AdminNav />
            <AdminAppLogin />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/AdminDocEditor"
        render={() => (
          <>
            <AdminNav />
            <AdminDocEditor />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/AdminQuizList"
        render={() => (
          <>
            <AdminNav />
            <AdminQuizList />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/AdminQuizMaker"
        render={() => (
          <>
            <AdminNav />
            <AdminQuizMaker />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/AdminUserConfig"
        render={() => (
          <>
            <AdminNav />
            <AdminUserConfig />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/AdminQuizUpdate"
        render={() => (
          <>
            <AdminNav />
            <AdminQuizUpdate />
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
        path="/Learners/Quiz/Timer"
        render={() => (
          <>
            <LearnerNav />
            <Timer />
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
