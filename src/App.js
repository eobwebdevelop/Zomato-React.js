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
import AdminQuizEditor from "./Admin/AdminQuizEditor";
import AdminUserEditor from "./Admin/AdminUserEditor";
import AdminRestaurantEditor from "./Admin/AdminRestaurantEditor";
import AdminDocList from './Admin/AdminDocList';
import AdminRestaurantCreator from "./Admin/AdminRestaurantCreator";
import AdminProductCreator from "./Admin/AdminProductCreator"
import AdminHomePage from "./Admin/AdminHomePage";
import AdminProductEditor from "./Admin/AdminProductEditor"
import AdminProductList from "./Admin/AdminProductList";
import AdminUserList from "./Admin/AdminUserList";
import AdminRestaurantList from "./Admin/AdminRestaurantList";
import AdminResultList from "./Admin/AdminResultList";
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
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: availableLanguages.pt,
      quizzes: [{id:0, name:''}],
      products: [{id:0, name:'', description: ''}],
      users: [{id:0, first_name:''}],
      restaurants: [{id:0, name: ''}],
      regions: [{id: 0, name: ''}],
      results: [{id: 0, name: ''}]
  }
};

getRegion = () => {
  fetch('http://localhost:3000/admin/region')
    .then(response => response.json())
    .then(data => {
      this.setState( (state) => ({ 
        ...state,
        regions: data.Region,
      }))
    })
};


getResults = () => {
  fetch('http://localhost:3000/admin/result')
    .then(response => response.json())
    .then(data => { 
      this.setState( (state) => ({ 
        ...state,
        results : data.Results,
      }))
    })
};



getRestaurants = () => {
  fetch('http://localhost:3000/admin/restaurant')
    .then(response => response.json())
    .then(data => {
      this.setState( (state) => ({ 
        ...state,
        restaurants: data.Restaurant,
      }))
    })
};

  getQuizzes = () => {
    fetch('http://localhost:3000/admin/quiz')
      .then(response => response.json())
      .then(data => {
        this.setState( (state) => ({ 
          ...state,
          quizzes: data.quizzes,
        }))
      })
  };

  getProducts = () => {
    fetch('http://localhost:3000/admin/product')
      .then(response => response.json())
      .then(data => { 
        this.setState( (state) => ({ 
          ...state,
          products: data.product,
        }))
      })
  };


  getUsers = () => {
    fetch('http://localhost:3000/admin/user')
      .then(response => response.json())
      .then(data => { 
        this.setState( (state) => ({ 
          ...state,
          users: data.users,
        }))
      })
  };


  handleChangeLanguage = (e) => {
      this.setState(
          { currentLanguage: e.target.value }
      );
      localStorage.setItem('currentLanguage', JSON.stringify(e.target.value));
  }
//LocalStorage.getItem('currentLanguage');

  componentDidMount(){
    this.getQuizzes()
    this.getProducts()
    this.getUsers()
    this.getRestaurants()
    this.getRegion()
    this.getResults()
    const json = localStorage.getItem('currentLanguage')
    const currentLanguage = JSON.parse(json)

    if (currentLanguage) {
      this.setState({ currentLanguage })
    }
  }

  handleChangeLanguage = (e) => {
    this.setState(
        { currentLanguage: e.target.value }
    );
    localStorage.setItem('currentLanguage', JSON.stringify(e.target.value));
  }

  render() {
    const { currentLanguage, quizzes, products, users, restaurants, regions, results } = this.state;

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
          path="/Admin"
          render={() => (
            <>
              <AdminNav />
              <AdminHomePage />
            </>
          )}
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
              <AdminQuizList
              quizzes = {quizzes} />
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
          path="/Admin/AdminUserEditor/:id"
          render={(props) => (
            <>
              <AdminNav />
              <AdminUserEditor
              id={props.match.params.id}
              users = {users}/>
            </>
          )}
        />
        <Route
          exact
          path="/Admin/AdminQuizEditor/:id"
          render={(props) => (
            <>
              <AdminNav />
              <AdminQuizEditor 
              id={props.match.params.id}
              quizzes = {quizzes} />
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
        path="/Admin/AdminRestaurantEditor/:id"
        render={(props) => (
          <>
            <AdminNav />
            <AdminRestaurantEditor 
            restaurants = { restaurants }
            regions = { regions } 
            id={props.match.params.id}/>
          </>
        )}
      />
      <Route
        exact
        path="/Admin/AdminRestaurantList"
        render={() => (
          <>
            <AdminNav />
            <AdminRestaurantList
            restaurants = {restaurants} />
          </>
        )}
      />
      <Route
        exact
        path="/Admin/AdminProductList"
        render={() => (
          <>
            <AdminNav />
            <AdminProductList
            products = {products} />
          </>
        )}
      />
       <Route
        exact
        path="/Admin/AdminProductCreator"
        render={() => (
          <>
            <AdminNav />
            <AdminProductCreator />
          </>
        )}
      />
       <Route
        exact
        path="/Admin/AdminProductEditor/:id"
        render={(props) => (
          <>
            <AdminNav />
            <AdminProductEditor 
             id={props.match.params.id}
             products = {products}/>
          </>
        )}
      />
      <Route
          exact
          path="/Admin/AdminUserList"
          render={() => (
            <>
              <AdminNav />
              <AdminUserList
              users = {users} />
            </>
          )}
        />
        <Route
          exact
          path="/Admin/AdminResultList"
          render={() => (
            <>
              <AdminNav />
              <AdminResultList
              results = {results} />
            </>
          )}
        />
        {/* Learners Route */}
        <Route
          exact
          path="/Learners/ContactUs"
          render={() => (
            <>
              <LearnerNav />
              <ContactUs />
            </>
          )}
        />
        <Route
          exact
          path="/Learners/FAQ"
          render={() => (
            <>
              <LearnerNav />
              <FAQ />
            </>
          )}
        />
        <Route
          exact
          path="/Learners/Documentation"
          render={() => (
            <>
              <LearnerNav />
              <Documentation />
            </>
          )}
        />

        <Route
          exact
          path="/Learners/LogIn"
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
          path="/Learners/Quiz"
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
          path="/Learners/SignUp"
          render={() => (
            <>
              <LearnerNav />
              <SignUp 
              restaurants = {restaurants} />
            </>
          )}
        />
      </LanguagesContext.Provider>
    );
  }
}

export default App;
