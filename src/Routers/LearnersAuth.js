import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
// Learners SignUp
import SignUp from '../Learners/SignUp/SignUp';
import BasicNav from '../BasicNav.js';
import LogIn from '../Learners/LogIn/LogIn';


const LearnersAuth = (props) => (
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
            <SignUp restaurants={props.restaurants} />
          </>
        )}
      />
      <Route
        exact
        path="/learners/login"
        render={() => (
          <>
            <BasicNav />
            <LogIn />
          </>
        )}
      />
    </Switch>
  </>
);

export default LearnersAuth;
