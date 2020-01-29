import React, { Component } from "react";
import "./App.css";
import { Redirect, Route } from "react-router-dom";
// Switch, withRouter


// Admin portal imports
import AdminNav from "./Admin/AdminNav.js";
import AdminAppLogin from "./Admin/AdminAppLogin";
import AdminQuizList from "./Admin/AdminQuizList";
import AdminQuizMaker from "./Admin/AdminQuizMaker";
import AdminQuizEditor from "./Admin/AdminQuizEditor";
import AdminEditUser from "./Admin/AdminEditUser";
import AdminRestaurantEditor from "./Admin/AdminRestaurantEditor";
import AdminUserEditor from "./Admin/AdminUserEditor";
import AdminDocList from "./Admin/AdminDocList";
import AdminDocEditor from "./Admin/AdminDocEditor";
import AdminRestaurantCreator from "./Admin/AdminRestaurantCreator";
import AdminRestaurantList from "./Admin/AdminRestaurantList";
import AdminProductCreator from "./Admin/AdminProductCreator";
import AdminHomePage from "./Admin/AdminHomePage";
import AdminProductEditor from "./Admin/AdminProductEditor";
import AdminProductList from "./Admin/AdminProductList";
import AdminUserList from "./Admin/AdminUserList";
import AdminResultList from "./Admin/AdminResultList";

// Learner portal imports

import LearnerNav from "./LearnerNav.js";
import ContactUs from "./Learners/ContactUs/ContactUs";
import Documentation from "./Learners/Documentation/Documentation";
import LogIn from "./Learners/LogIn/LogIn";
import ForgotPassword from "./Learners/LogIn/ForgotPassword";
import QuizList from "./Learners/QuizList/QuizList";
import Challenge from "./Learners/Challenge/Challenge";
// import Answer from "./Learners/Quiz/Answer";
// import Quiz from "./Learners/Quiz/Quiz";
// import Timer from "./Learners/Quiz/Timer";
// import Question from "./Learners/Quiz/Question";
// import Results from "./Learners/Quiz/Results";
import SignUp from "./Learners/SignUp/SignUp";
import FAQ from "./Learners/FAQ/FAQ.js";

// Translation eng/port

import LanguagesContext, {
  availableLanguages
} from "./contexts/languages-context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: availableLanguages.pt,
      quizzes: [{ id: 0, name: "" }],
      placeholderData: placeholderData,
      // Step defines which question you are seeing. Step 0 - 9 are questions, step 10 is results.
      step: 0,
      // Overalltime counts upwards until you are at step 10 i.e. results.
      overallTime: 0,
      // Check whether questions are loaded, else we need to display loading screen when opening quiz.
      questionsAreLoaded: false,
      // This defines which QuizID the user is playing. Needs to update with the quiz number used on ""
      quizIDInPlay: 1,
      timerRunning: false,
      token: "",
      quizzes: [{ id: 0, name: "" }],
      products: [{ id: 0, name: "", description: "" }],
      users: [{ id: 0, first_name: "" }],
      restaurants: [{ id: 0, name: "" }],
      regions: [{ id: 0, name: "" }],
      results: [{ id: 0, name: "" }],
      documentation: []
    };

    this.onNextStep = this.onNextStep.bind(this);

    this.timer = null;
    this.stopTimer = this.stopTimer.bind(this);
    this.startOverallTimer = this.startOverallTimer.bind(this);

    this.refreshQuizState = this.refreshQuizState.bind(this);
  }

  getRegion = () => {
    fetch("http://localhost:3000/admin/region")
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          regions: data.Region
        }));
      });
  };

  getResults = () => {
    fetch("http://localhost:3000/admin/result")
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          results: data.Results
        }));
      });
  };

  getRestaurants = () => {
    fetch("http://localhost:3000/admin/restaurant")
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          restaurants: data.Restaurant
        }));
      });
  };

  getQuizzes = () => {
    fetch("http://localhost:3000/admin/quiz",
    {
      method: 'POST',
      headers: new Headers({
          'Preferred-Language': 'application/json'
        }),
        body: JSON.stringify(this.state),
      })
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          quizzes: data.quizzes,
          questionsAreLoaded: true
        }));
      });
  };

  getAllDocs = () => {
    fetch(process.env.REACT_APP_PATH_ADMIN_DOC)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          documentation: data.Documentation
        }));
      });
  };

  onNextStep = () => {
    this.setState(state => {
      return {
        ...state,
        step: ++state.step
      };
    });
  };

  // ew: This timer is called on ComponentDidMount as soon as a user clicks Take Quiz. Once step is 10 (results), it stops.

  startOverallTimer() {
    this.setState({ timerRunning: true });
    this.timer = setInterval(
      () =>
        this.setState(prevState => {
          return prevState.step < 10
            ? {
                ...prevState,
                overallTime: this.state.overallTime + 1
              }
            : { ...prevState };
        }),
      1000
    );
  }

  stopTimer() {
    this.setState({ timer: false });
    // console.log("stopped timer");
    //Clear interval
    clearInterval(this.timer);
  }

  refreshQuizState() {
    // This is called on results page, and also required to be in ComponerntDidMount on the homepage to refresh quiz-related state variables should the user click out / navigate from a quiz in play.
    // console.log("refresh");
    this.stopTimer();
    this.setState({ overallTime: 0, step: 0 });
  }

  getProducts = () => {
    fetch("http://localhost:3000/admin/product")
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          products: data.product
        }));
      });
  };

  getUsers = () => {
    fetch("http://localhost:3000/admin/user")
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          users: data.users
        }));
      });
  };

  handleChangeLanguage = e => {
    this.setState({ currentLanguage: e.target.value });
    localStorage.setItem("currentLanguage", JSON.stringify(e.target.value));
  };

  componentDidMount() {
    this.refreshQuizState();
    this.getQuizzes();
    this.getProducts();
    this.getUsers();
    this.getRestaurants();
    this.getRegion();
    this.getResults();
    this.getAllDocs();
    const currentLanguage = localStorage.getItem("currentLanguage");
    const token = localStorage.getItem("token");

    this.setState({
      currentLanguage: 
        currentLanguage ?
          JSON.parse(currentLanguage)
          : availableLanguages.pt,
      token: token ? JSON.parse(token) : ""
    });
  }

  render() {
    const {
      currentLanguage,
      quizzes,
      products,
      users,
      restaurants,
      regions,
      results
    } = this.state;

    return (
      <LanguagesContext.Provider
        value={{ currentLanguage, onChangeLanguage: this.handleChangeLanguage }}
      >
        <Route
          exact
          path="/"
          render={() => <Redirect to="/Learners/Login"></Redirect>}
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
              <AdminQuizList quizzes={quizzes} />
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
          path="/Admin/AdminEditUser/:id"
          render={props => (
            <>
              <AdminNav />
              <AdminEditUser id={props.match.params.id} />
            </>
          )}
        />

        <Route
          exact
          path="/Admin/AdminQuizEditor/:id"
          render={props => (
            <>
              <AdminNav />
              <AdminQuizEditor 
              quizzes = {quizzes} /> />
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
          path="/Admin/AdminUserEditor/:id"
          render={props => (
            <>
              <AdminNav />
              <AdminUserEditor
              users = {users}/>
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
              restaurants={restaurants}
               />
            </>
          )}
        />

        <Route
          exact
          path="/Admin/AdminProductList"
          render={() => (
            <>
              <AdminNav />
              <AdminProductList products={products} />
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
          render={props => (
            <>
              <AdminNav />
              <AdminRestaurantEditor
                restaurant={restaurants.find((res) => res.id === +props.match.params.id)}
                regions={regions}
              />
            </>
          )}
        />

        <Route
          exact
          path="/Admin/AdminUserList"
          render={() => (
            <>
              <AdminNav />
              <AdminUserList users={users} />
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

        <Route
          exact
          path="/Admin/AdminProductList"
          render={() => (
            <>
              <AdminNav />
              <AdminProductList />
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
        render={props => (
          <>
            <AdminNav />
            <AdminProductEditor 
             products = {products}/>
          </>
        )}
      />
        <Route
          exact
          path="/Admin/AdminResultList"
          render={() => (
            <>
              <AdminNav />
              <AdminResultList results={results} />
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
              <Documentation documentation={this.state.documentation} />
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
          path="/Learners/QuizList"
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
              <Challenge
                refreshQuizState={this.refreshQuizState}
                questionPackage={this.state.placeholderData.quizzes}
                startOverallTimer={this.startOverallTimer}
                overallTime={this.state.overallTime}
                onNextStep={this.onNextStep}
                onClickAnswer={this.onClickAnswer}
                step={this.state.step}
                quizIDInPlay={this.state.quizIDInPlay}
                stopTimer={this.stopTimer}
                overallTime={this.state.overallTime}
              />
            </>
          )}
        />

        <Route
          exact
          path="/Learners/SignUp"
          render={() => (
            <>
              <LearnerNav />
              <SignUp restaurants={restaurants} />
            </>
          )}
        />
      </LanguagesContext.Provider>
    );
  }
}

const placeholderData = {
  quizzes: [
    {
      id: 1,
      name: "Discounts ",
      user_type_id: 2,
      language_id: 1,
      product_id: 1,
      questions: [
        {
          id: 1,
          question: "What is Zomato Gold?",
          correct_answer_id: 1,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "Not sure",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "Cool discounts",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 2,
          question: "Question 2",
          correct_answer_id: 2,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 3,
          question: "Question 3",
          correct_answer_id: 3,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 4,
          question: "What is Zomato map?",
          correct_answer_id: 4,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 5,
          question: "Question 5",
          correct_answer_id: 1,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 6,
          question: "Question 6",
          correct_answer_id: 2,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 7,
          question: "Question 7",
          correct_answer_id: 3,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 8,
          question: "Question 8",
          correct_answer_id: 4,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 9,
          question: "Question 9",
          correct_answer_id: 1,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        },
        {
          id: 10,
          question: "Question 10",
          correct_answer_id: 2,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "option 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "option 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "option 4",
              question_id: 1
            }
          ]
        }
      ]
    }
  ]
};

export default App;
