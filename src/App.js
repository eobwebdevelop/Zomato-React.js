import React, { Component } from "react";
import "./App.css";
import { Redirect, Route } from "react-router-dom";
// Switch, withRouter
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// Admin portal imports
import AdminNav from "./Admin/AdminNav.js";
import AdminLogin from "./Admin/AdminLogin";
import AdminQuizList from "./Admin/AdminQuizList";
import AdminQuizMaker from "./Admin/AdminQuizMaker";
import AdminQuizEditor from "./Admin/AdminQuizEditor";
import AdminUserEditor from "./Admin/AdminUserEditor";
import AdminDocList from "./Admin/AdminDocList";
import AdminDocEditor from "./Admin/AdminDocEditor";
import AdminRestaurantEditor from "./Admin/AdminRestaurantEditor";
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
import FAQ from "./Learners/FAQ/FAQ";

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
      // Score out of 10
      score: 0,
      // Check whether questions are loaded, else we need to display loading screen when opening quiz.
      questionsAreLoaded: false,
      // This defines which QuizID the user is playing. Needs to update with the quiz number used on ""
      quizIDInPlay: 1,
      timerRunning: false,
      userQuizAnswers: [],
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

    this.checkScore = this.checkScore.bind(this);

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
    fetch("http://localhost:3000/learner/quiz",
    {
      method: 'GET',
      headers: new Headers({
          'Preferred-Language': 'application/json'
        })
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

  getDocs = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/doc`)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          documentation: data.Documentation
        }));
      })
    };

  onNextStep = selectedAnswer => {
    this.setState(state => {
      return {
        ...state,
        step: ++state.step,
        userQuizAnswers: [...this.state.userQuizAnswers, selectedAnswer]
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

  checkScore() {
    console.log("checkScore");
    var totalScore = 0;
    for (let i = 0; i < this.state.userQuizAnswers.length; i++) {
      if (
        this.state.userQuizAnswers[i].userAnswerID ==
        this.state.userQuizAnswers[i].correctAnswerID
      ) {
        totalScore = totalScore + 1;
      }
    }

    this.setState({ score: totalScore });
    console.log(this.state.score);
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
    this.getDocs();
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

  handleDelete = (id, resourceType, callback) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/${resourceType}/delete`,
    {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        id,
      }),
    })
    .then(res => res.json())
    .then(callback);
  }

  handleDeleteDoc = (id) => {
    this.handleDelete(
      id,
      'doc',
      () => {
        const updatedDocs = (this.state.documentation.filter((doc) => doc.id !== id))
        this.setState({ documentation : updatedDocs})
      }
    )
  }

  handleDeleteProduct = (id) => {
    this.handleDelete(
      id,
      'product',
      () => {
        const updatedProducts = (this.state.quizzes.filter((quiz) => quiz.id !== id))
        this.setState({ products : updatedProducts})
      }
    )
  }
  handleDeleteQuiz = (id) => {
    this.handleDelete(
      id,
      'quiz',
      () => {
        const updatedQuizzes = (this.state.quizzes.filter((quiz) => quiz.id !== id))
        this.setState({ quizzes : updatedQuizzes})
      }
    )
  }
  handleDeleteRestaurant = (id) => {
    this.handleDelete(
      id,
      'restaurant',
      () => {
        const updatedRestaurants = (this.state.restaurants.filter((restaurant) => restaurant.id !== id))
        this.setState({ restaurants : updatedRestaurants})
      }
    )
  }
  handleDeleteUser = (id) => {
    this.handleDelete(
      id,
      'user',
      () => {
        const updatedUsers = (this.state.users.filter((user) => user.id !== id))
        this.setState({ users : updatedUsers})
      }
    )
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

    console.log(this.state.userQuizAnswers);

    return (
      <LanguagesContext.Provider
        value={{ currentLanguage, onChangeLanguage: this.handleChangeLanguage }}
      >
        <Route
          exact
          path="/"
          render={() => <Redirect to="/learners/login"></Redirect>}
        />
        <Route
          exact
          path="/admin"
          render={() => (
            <>
              <AdminNav />
              <AdminHomePage />
            </>
          )}
        />

        <Route
          exact
          path="/admin/login"
          render={() => (
            <>
              <AdminNav />
              <AdminLogin />
            </>
          )}
        />
   {/* {Documentation } */}
        <Route
          exact
          path="/admin/doc_list"
          render={() => (
            <>
              <AdminNav />
              <AdminDocList 
                documentation={this.state.documentation}
                onDelete={this.handleDeleteDoc}
              />
            </>
          )}
        />

        <Route
          exact
          path="/admin/doc_editor"
          render={() => (
            <>
              <AdminNav />
              <AdminDocEditor documentation={this.state.documentation}/>
            </>
          )}
        />
           {/* {QUIZ } */}
        <Route
          exact
          path="/admin/quiz_list"
          render={() => (
            <>
              <AdminNav />
              <AdminQuizList 
                quizzes={quizzes}
                onDelete={this.handleDeleteQuiz} 
              />
            </>
          )}
        />
        <Route
          exact
          path="/admin/quiz_maker"
          render={() => (
            <>
              <AdminNav />
              <AdminQuizMaker />
            </>
          )}
        />
         <Route
          exact
          path="/admin/quiz_editor/:id"
          render={props => (
            <>
              <AdminNav />
              <AdminQuizEditor 
              id={props.match.params.id}
              quizzes = {quizzes} /> />
            </>
          )}
        />
        {/* {Users } */}
        <Route
          exact
          path="/admin/user_list"
          render={() => (
            <>
              <AdminNav />
              <AdminUserList users={users} />
            </>
          )}
        />
        <Route
          exact
          path="/admin/user_editor/:id"
          render={(props) => (
            <>
              <AdminNav />
              <AdminUserEditor
              id={props.match.params.id}
              users = {users}/>
            </>
          )}
        />
           {/* {Restaurant } */}
        <Route
          exact
          path="/admin/restaurant_list"
          render={() => (
            <>
              <AdminNav />
              <AdminRestaurantList 
                restaurants={restaurants}
                onDelete={this.handleDeleteRestaurant} />
            </>
          )}
        />
        <Route
          exact
          path="/admin/restaurant_creator"
          render={() => (
            <>
              <AdminNav />
              <AdminRestaurantCreator />
            </>
          )}
        />

        <Route
          exact
          path="/admin/restaurant_editor/:id"
          render={props => (
            <>
              <AdminNav />
              <AdminRestaurantEditor
                restaurants={restaurants}
                regions={regions}
                id={props.match.params.id}
              />
            </>
          )}
        />
           {/* {Products } */}
        <Route
          exact
          path="/admin/product_list"
          render={() => (
            <>
              <AdminNav />
              <AdminProductList 
                products={products} 
                onDelete={this.handleDeleteProduct}
              />
            </>
          )}
        />
        <Route
          exact
          path="/admin/product_creator"
          render={() => (
            <>
              <AdminNav />
              <AdminProductCreator />
            </>
          )}
        />

       <Route
        exact
        path="/admin/product_editor/:id"
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
          path="/admin/result_list"
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
          path="/learners/contact_us"
          render={() => (
            <>
              <LearnerNav />
              <ContactUs />
            </>
          )}
        />

        <Route
          exact
          path="/learners/faq"
          render={() => (
            <>
              <LearnerNav />
              <FAQ />
            </>
          )}
        />

        <Route
          exact
          path="/learners/documentation"
          render={() => (
            <>
              <LearnerNav />
              <Documentation documentation={this.state.documentation} />
            </>
          )}
        />

        <Route
          exact
          path="/learners/login"
          render={() => (
            <>
              <LearnerNav />
              <LogIn />
            </>
          )}
        />

        <Route
          exact
          path="/learners/login/forgot_password"
          render={() => (
            <>
              <LearnerNav />
              <ForgotPassword />
            </>
          )}
        />

        <Route
          exact
          path="/learners/quiz_list"
          render={() => (
            <>
              <LearnerNav />
              <QuizList />
            </>
          )}
        />

        <Route
          exact
          path="/learners/quiz_list/quiz"
          render={() => (
            <>
              <LearnerNav />
              <Challenge
                score={this.state.score}
                checkScore={this.checkScore}
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
                userAnswerClick={this.userAnswerClick}
                userQuizAnswers={this.state.userQuizAnswers}
              />
            </>
          )}
        />

        <Route
          exact
          path="/learners/signup"
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
          question: "What is blah?",
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
          question: "How many restaraunts?",
          correct_answer_id: 3,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "optsssion 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "optiosn 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "optison 3",
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
          question: "What is map?",
          correct_answer_id: 4,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "optsion 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "optisson 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "optiosn 4",
              question_id: 1
            }
          ]
        },
        {
          id: 5,
          question: "Is it true?",
          correct_answer_id: 1,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "optsion 1",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "opstion 2",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "option 3",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "optison 4",
              question_id: 1
            }
          ]
        },
        {
          id: 6,
          question: "Really?",
          correct_answer_id: 2,
          quiz_id: 1,
          answers: [
            {
              id: 1,
              answer_option: "optiosn 1",
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
