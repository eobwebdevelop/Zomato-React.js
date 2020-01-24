import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, } from "react-router-dom"; //Switch, withRouter 
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";


// Admin portal imports
import AdminNav from "./Admin/AdminNav.js";
import AdminAppLogin from "./Admin/AdminAppLogin";
import AdminDocEditor from "./Admin/AdminDocEditor";
import AdminQuizList from "./Admin/AdminQuizList";
import AdminQuizMaker from "./Admin/AdminQuizMaker";
import AdminQuizUpdate from "./Admin/AdminQuizUpdate";
import AdminUserConfig from "./Admin/AdminUserConfig";
import AdminEditUser from "./Admin/AdminEditUser";
import AdminRestaurantEditor from "./Admin/AdminRestaurantEditor";
import AdminDocList from './Admin/AdminDocList';
import AdminRestaurantCreator from "./Admin/AdminRestaurantCreator";



// Learner portal imports

import LearnerNav from "./LearnerNav.js";
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

// Translation eng/port


import LanguagesContext, { availableLanguages } from './contexts/languages-context';


class App extends Component {
  state = {
    currentLanguage: availableLanguages.pt,
  }



  componentDidMount() {
    const json = localStorage.getItem('currentLanguage')
    const currentLanguage = JSON.parse(json)
    this.setState({ currentLanguage })
  }


handleChangeLanguage = (e) => {
  this.setState(
      { currentLanguage: e.target.value }
  );
  localStorage.setItem('currentLanguage', JSON.stringify(e.target.value));
}
  render() {
    const { currentLanguage } = this.state;


    return (
      
      <LanguagesContext.Provider
        value={{ currentLanguage, onChangeLanguage: this.handleChangeLanguage }}
      >
        {/* EW: Ideally, we want to do some sort of check of where the home directory leads. If user is logged in, go to QuizList pag (/Learners/QuizList/QuizList), if not, ask to login   */}
        <Route
          exact
          path="/"
          render={() => <Redirect to="/Learners/LogIn/LogIn"></Redirect>}
        />

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
          path="/Admin/AdminDocList"
          render={() => (
            <>
              <AdminNav />
              <AdminDocList />
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
          path="/Admin/AdminEditUser"
          render={() => (
            <>
              <AdminNav />
              <AdminEditUser />
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
         <Route
        exact
        path="/Admin/AdminRestaurantCreator"
        render={() => (
          <>
            <AdminNav />
            <AdminRestaurantCreator />
          </>
        )}
      />
        <Route
        exact
        path="/Admin/AdminRestaurantEditor"
        render={() => (
          <>
            <AdminNav />
            <AdminRestaurantEditor />
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
      </LanguagesContext.Provider>
    );
  }
}

export default App;
