import React from 'react';
import {
  Switch, Route, Redirect, Link,
} from 'react-router-dom';
// Learners SignUp
import SignUp from '../Learners/SignUp/SignUp';
import BasicNav from '../BasicNav.js';
import LogIn from '../Learners/LogIn/LogIn';


const LearnersAuth = ({ restaurants, onLogin, flash }) => (
  <>
   
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/learners/login" />}
      />
      <Route
        exact
        path="/learners/signup"
        render={() => (
          <>
          <BasicNav />
            <SignUp restaurants={restaurants} />
          </>
        )}
      />
      <Route
        exact
        path="/learners/login"
        render={() => (
          <>
          <BasicNav />
            <LogIn onLogin={onLogin} flash={flash} />
          </>
        )}
      />
    </Switch>
  </>
);

export default LearnersAuth;
