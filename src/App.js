import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import DocHost from './Admin/DocHost';
import QA from './Admin/QA';
import QuizzMaker from './Admin/QuizzMaker';
import QuizzUpdate from './Admin/QuizzUpdate';

import ContactUs from './Learners/ContactUs/ContactUs';
import DocsSection from './Learners/Documentation/DocsSection';
import Documentation from './Learners/Documentation/Documentation';
import LogIn from './Learners/LogIn/LogIn';
import MainPage from './Learners/MainPage/MainPage';
import QuizList from './Learners/QuizList/QuizList';
import Answer from './Learners/Quizz/Answer';
import Quizz from './Learners/Quizz/Quizz';
import Question from './Learners/Quizz/Question';
import Results from './Learners/Quizz/Results';
import SignUp from './Learners/SignUp/SignUp';



function App() {
  return (

    <>
    {/* Admin Route */}
        {/* <NavBar newUser={this.getUser} /> */}
      <Route exact path="/Admin/DocHost" render={() =>
        <DocHost  />}       
      />
      <Route exact path="/Admin/QA" render={() =>
        <QA  />}
      />
      <Route exact path="/Admin/QuizzMaker" render={() =>
        <QuizzMaker  />}
      />
      <Route exact path="/Admin/QuizzUpdate" render={() =>
        <QuizzUpdate  />}
      />

      {/* Learnes Route */}
      <Route exact path="/Learners/ContactUs/ContactUs" render={() =>
        <ContactUs  />}
      />

      <Route exact path="/Learners/Documentation/Documentation" render={() =>
          <Documentation  />}
      />
      <Route exact path="/Learners/Documentation/DocsSection" render={() =>
          <DocsSection  />}
      />

      <Route exact path="/Learners/LogIn/LogIn" render={() =>
          <LogIn  />}
      />

      <Route exact path="/Learners/MainPage/MainPage" render={() =>
          <MainPage  />}
      />

      <Route exact path="/Learners/QuizList/QuizList" render={() =>
          <QuizList  />}
      />


      <Route exact path="/Learners/Quizz/Answer" render={() =>
          <Answer  />}
      />
      <Route exact path="/Learners/Quizz/Question" render={() =>
          <Question  />}
      />
      <Route exact path="/Learners/Quizz/Quizz" render={() =>
          <Quizz  />}
      />
      <Route exact path="/Learners/Quizz/Results" render={() =>
          <Results  />}
      />
      <Route exact path="/Learners/SignUp/SignUp" render={() =>
          <SignUp  />}
      />



  </>
  );
}

export default App;
