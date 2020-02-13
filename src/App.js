import React, { Component } from "react";
import "./App.css";

import { Redirect, Route, withRouter, matchPath } from "react-router-dom";

// Switch, withRouter
//import { Navbar, Nav, NavDropdown } from "react-bootstrap";

//Routers
import LearnersAuth from "./Routers/LearnersAuth";
import Learners from "./Routers/Learners";

// Admin portal imports
import AdminNav from './Admin/AdminNav.js';
import AdminLogin from './Admin/AdminLogin';
import AdminQuizList from './Admin/AdminQuizList';
import AdminQuizMaker from './Admin/AdminQuizMaker';
import AdminQuizEditor from './Admin/AdminQuizEditor';
import AdminUserEditor from './Admin/AdminUserEditor';
import AdminDocList from './Admin/AdminDocList';
import AdminDocEditor from './Admin/AdminDocEditor';
// import AdminFaqList from './Admin/AdminFaqList';
// import AdminFaqEditor from './Admin/AdminFaqEditor';
import AdminRestaurantEditor from './Admin/AdminRestaurantEditor';
import AdminRestaurantCreator from './Admin/AdminRestaurantCreator';
import AdminRestaurantList from './Admin/AdminRestaurantList';
import AdminProductCreator from './Admin/AdminProductCreator';
import AdminHomePage from './Admin/AdminHomePage';
import AdminProductEditor from './Admin/AdminProductEditor';
import AdminProductList from './Admin/AdminProductList';
import AdminUserList from './Admin/AdminUserList';
import AdminResultList from './Admin/AdminResultList';
import AdminQuestionEditor from './Admin/AdminQuestionEditor';
import BasicNavbar from './Admin/BasicNavbar'


// Learner portal imports Now is everything in Routes/LearnersAuth and Routes/Learnes

//Future feature
// import ForgotPassword from "./Learners/LogIn/ForgotPassword";

// Translation eng/port

import LanguagesContext, {
  availableLanguages
} from "./contexts/languages-context";
import QuizzesContext from "./contexts/quiz-context";

// EW: The module below JWT decode llows for decoding of JWT token, which is being used to read the user_id payload in the token
var jwtDecode = require("jwt-decode");

// EW 30.09.2019: Note, state.placeholderdata is useful for testing and provides a skeleton before API loaded so please leave in state for now.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: availableLanguages.pt,
      quizzesLearner: placeholderData,
      placeholderData: placeholderData,
      // Step defines which question you are seeing. Step 0 - 9 are questions, step 10 is results.
      step: 0,
      // Overalltime counts upwards until you are at step 10 i.e. results.
      overallTime: 0,
      // Score out of 10
      score: 0,
      // Check whether questions are loaded, else we need to display loading screen when opening quiz.
      quizzesAreLoaded: false,
      // Check whether Faqs are loaded, else we need to display loading screen when opening quiz.
      faqsAreLoaded : false,
      // This defines which QuizID the user is playing. Needs to update with the quiz number used on ""
      quizIDInPlay: 1,
      quizNameInPlay: "TestString",
      timerRunning: false,
      userQuizAnswers: [],
      token: "",
      userID: null,
      // userid should match auth to post the right quiz result
      products: [{ id: 0, name: "", description: "" }],
      users: [{ id: 0, first_name: "" }],
      restaurants: [{ id: 0, name: "", region: 0 }],
      regions: [{ id: 0, name: "" }],
      results: [{ id: 0, name: "" }],
      documentation: [],
      faq:[],
      langOptions: langOptions,
      quizzes: [{ id: 0, name: "" }]
    };

    this.changeQuizIDInPlay = this.changeQuizIDInPlay.bind(this);

    this.reduceQuizStep = this.reduceQuizStep.bind(this);

    this.timer = null;
    this.stopTimer = this.stopTimer.bind(this);
    this.startOverallTimer = this.startOverallTimer.bind(this);

    this.checkScore = this.checkScore.bind(this);

    this.refreshQuizState = this.refreshQuizState.bind(this);
    this.postQuizResult = this.postQuizResult.bind(this);
    this.addUserIDFromTokenToState = this.addUserIDFromTokenToState.bind(this);
    this.timer = null;
  }

  getRegion = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/region`)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          regions: data.Region
        }));
      });
  };

  getResults = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/result`)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          results: data.Results
        }));
      });
  };

  getRestaurants = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/restaurant`)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          restaurants: data.Restaurant
        }));
      });
  };

  getQuizzesByLang = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/learner/quiz`, {
      method: "GET",
      headers: new Headers({
        "Preferred-Language": this.state.currentLanguage
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          quizzesLearner: data
        }));
      });
  };

  getQuizzes = () => {
    this.setState({ quizzesAreLoaded: false }, () => {
      fetch(`${process.env.REACT_APP_SERVER_URL}/admin/quiz`)
        .then(response => response.json())
        .then(data => {
          this.setState(state => ({
            ...state,
            quizzes: data.quizzes,
            quizzesAreLoaded: true
          }));
        });
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
      });
  };

  getFaqs = () => {
    this.setState(
    { faqsAreLoaded: false },
      () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/faq`)
      .then(response => response.json())
      .then(data => {
        console.log('got F ', data)
        this.setState(state => ({
          ...state,
          faq: data.Faq,
          faqsAreLoaded: true
        }));
      });
    });
  };

  getFaqsByLang = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/learner/faq`, {
      method: "GET",
      headers: new Headers({
        "Preferred-Language": this.state.currentLanguage
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('got ', data)
        this.setState(state => ({
          ...state,
          faq: data
        }));
      });
  };

  

  getCurrentDate() {
    // this returns in a format friendly to mysql DATETIME
    return new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
  }

  postQuizResult = () => {
    const user_id = this.state.userID.toString();
    const quiz_id = this.state.quizIDInPlay.toString();
    const quiz_name = this.state.quizNameInPlay.toString();
    const quiz_language_id = this.state.currentLanguage.toString();
    const time_to_complete_seconds = this.state.overallTime.toString();
    const time_of_day = this.getCurrentDate().toString();
    const score_out_of_10 = this.state.score.toString();

    fetch(`${process.env.REACT_APP_SERVER_URL}/quiz/postresult`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        user_id: user_id,
        quiz_id: quiz_id,
        quiz_name: quiz_name,
        quiz_language_id: quiz_language_id,
        time_to_complete_seconds: time_to_complete_seconds,
        time_of_day: time_of_day,
        score_out_of_10: score_out_of_10
      })
    }).then(res => {
      res.json();
    });
  };

  addUserInputToState = selectedAnswer => {
    // take state, make it equal to temp variable
    const userAnswersTemp = this.state.userQuizAnswers;

    console.log(userAnswersTemp);

    // if selected user answer exists, overwrite it
    userAnswersTemp.forEach(el => {
      if (el.questionNumber === selectedAnswer.questionNumber) {
        el.userAnswerID = selectedAnswer.userAnswerID;
        el.userAnswerText = selectedAnswer.userAnswerText;
      }
    });

    // if it doesn't exist, add it on.
    const found = userAnswersTemp.some(
      el => el.questionNumber === selectedAnswer.questionNumber
    );

    if (!found) userAnswersTemp.push(selectedAnswer);

    // add it to state

    this.setState(state => {
      return {
        userQuizAnswers: userAnswersTemp
      };
    });

    console.log("state", this.state.userQuizAnswers);
  };

  incrementQuizStep = () => {
    this.setState(state => {
      return {
        ...state,
        step: this.state.step + 1
      };
    });
  };

  reduceQuizStep = () => {
    this.setState(state => {
      return {
        ...state,
        step: this.state.step - 1
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
    clearInterval(this.timer);
  }

  checkScore() {
    var totalScore = 0;
    for (let i = 0; i < this.state.userQuizAnswers.length; i++) {
      if (
        this.state.userQuizAnswers[i].userAnswerText ===
        this.state.userQuizAnswers[i].correctAnswerText
      ) {
        totalScore = totalScore + 1;
      }
    }
    this.setState({ score: totalScore });
  }

  // EW:When you click TAKE QUIZ, this method is called in the quiz card, updating the state. A filter is run to only play the quiz specified in this.state.QuizIDInPlay.

  changeQuizIDInPlay(quizID, quizName) {
    this.setState({ quizIDInPlay: quizID, quizNameInPlay: quizName });
  }

  refreshQuizState() {
    // This is called on results page, and also required to be in ComponentDidMount on the homepage to refresh quiz-related state variables should the user click out / navigate from a quiz in play.
    this.stopTimer();
    this.setState({ overallTime: 0, step: 0, score: 0, userQuizAnswers: [] });
  }

  addUserIDFromTokenToState() {
    this.setState({ userID: jwtDecode(this.state.token).id });
  }

  addUserIDFromTokenToState() {
    this.setState({ userID: jwtDecode(this.state.token).id });
  }

  getProducts = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/product`)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          products: data.product
        }));
      });
  };

  getUsers = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/user`)
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
    const currentLanguage = localStorage.getItem("currentLanguage");
    const token = localStorage.getItem("token");

    this.setState(
      {
        currentLanguage: currentLanguage
          ? JSON.parse(currentLanguage)
          : availableLanguages.pt,
        token: token ? JSON.parse(token) : ""
      },
      () => {
        this.getQuizzes();
        this.getQuizzesByLang();
        this.getProducts();
        this.getUsers();
        this.getRestaurants();
        this.getRegion();
        this.getResults();
        this.getDocs();
        this.getFaqs();
        this.getFaqsByLang();
      }
    );
  }
  componentDidUpdate(prevProps, pS) {
    if (this.state.currentLanguage !== pS.currentLanguage) {
      this.getQuizzesByLang();
      this.getProducts();
      this.getUsers();
      this.getRestaurants();
      this.getRegion();
      this.getResults();
      this.getDocs();
      // this.getFaqs();
    };
  };



  handleDelete = (id, resourceType, callback) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/${resourceType}/delete`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        id
      })
    })
      .then(res => res.json())
      .then(callback);
  };

  handleDeleteDoc = id => {
    this.handleDelete(id, "doc", () => {
      const updatedDocs = this.state.documentation.filter(doc => doc.id !== id);
      this.setState({ documentation: updatedDocs });
    });
  };
  // handleDeleteFaq = id => {
  //   this.handleDelete(id, "faq", () => {
  //     const updatedFaqs = this.state.faqs.filter(faq => faq.id !== id);
  //     this.setState({ faq: updatedFaqs });
  //   });
  // };

  handleDeleteProduct = id => {
    this.handleDelete(id, "product", () => {
      const updatedProducts = this.state.products.filter(
        product => product.id !== id
      );
      this.setState({ products: updatedProducts });
    });
  };
  handleDeleteQuiz = id => {
    this.handleDelete(id, "quiz", () => {
      const updatedQuizzes = this.state.quizzes.filter(quiz => quiz.id !== id);
      this.setState({ quizzes: updatedQuizzes });
    });
  };
  handleDeleteRestaurant = id => {
    this.handleDelete(id, "restaurant", () => {
      const updatedRestaurants = this.state.restaurants.filter(
        restaurant => restaurant.id !== id
      );
      this.setState({ restaurants: updatedRestaurants });
    });
  };
  handleDeleteUser = id => {
    this.handleDelete(id, "user", () => {
      const updatedUsers = this.state.users.filter(user => user.id !== id);
      this.setState({ users: updatedUsers });
    });
  };

  handleAnswerEdit = answer => {
    this.setState({ answer_option: answer });
  };

  handleQuizFound = quizId => {
    this.setState({
      quizfound: this.state.quizzes.find(quiz => quiz.id === +quizId)
    });
  };

  handleQuestionFound = questionId => {
    if (this.state.quizfound) {
      this.setState({
        questionfound: this.state.quizfound.questions.find(
          question => question.id === +questionId
        )
      });
    }
  };

  handleEdit = (doc) => {
    this.setState({
      selectedDoc: doc
    })
  }

  clearSelectedDoc = () => {
    this.setState({
      selectedDoc: {}
    })
  }

  render() {
    const {
      currentLanguage,
      quizzes,
      documentation,
      faq,
      products,
      users,
      restaurants,
      regions,
      results,
      quizzesAreLoaded,
      quizfound,
      questionfound
    } = this.state;

    // const quizfound = quizzes.find(
    //   quiz => quiz.id === +this.props.match.params.id
    // );
    // const questionfound = quizfound
    //   ? quizfound.questions.find(
    //       question => question.id === +this.props.match.params.qid
    //     )
    //   : [];
    // console.log(quizfound, questionfound, "hey");
    // console.log(
    //   matchPath(this.props.location.search, {
    //     path: "/admin/quiz_editor/:id/questions/:qid"
    //   })
    // );

    return (
      <LanguagesContext.Provider
        value={{ currentLanguage, onChangeLanguage: this.handleChangeLanguage }}
      >
        <QuizzesContext.Provider
          value={{
            quizzes,
            onLoadQuizzes: this.getQuizzes,
            quizzesAreLoaded
          }}
        >
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
                <BasicNavbar />
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
                  documentation={documentation}
                  onDelete={this.handleDeleteDoc}
                  onEdit={this.handleEdit}
                  clearSelectedDoc={this.clearSelectedDoc}
                />
              </>
            )}
          />

          <Route
            path="/admin/doc_editor"
            render={() => (
              <>
                <AdminNav />
                <AdminDocEditor
                  products={products}
                  documentation={documentation}
                  selectedDoc={selectedDoc}
                />
              </>
            )}
          />

          {/* { Faq }
          <Route
            exact
            path="/admin/faq_list"
            render={() => (
              <>
                <AdminNav />
                <AdminFaqList
                  faq={this.state.faq}
                  onDelete={this.handleDeleteFaq}
                />
              </>
            )}
          />

          <Route
            exact
            path="/admin/faq_editor"
            render={() => (
              <>
                <AdminNav />
                <AdminFaqEditor
                  faq={faq}
                />
              </>
            )}
          /> */}

          {/* {QUIZ } */}
          <Route
            exact
            path="/admin/quiz_list"
            render={() => (
              <>
                <AdminNav />
                <AdminQuizList onDelete={this.handleDeleteQuiz} />
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
                <AdminQuizEditor onEdit={this.handleEditQuestion} />
              </>
            )}
          />
          <Route
            exact
            path="/admin/quiz_editor/:id/questions/:qid"
            render={() => (
              <>
                <AdminNav />
                <AdminQuestionEditor
                  onEdit={this.handleAnswerEdit}
                  quizfound={quizfound}
                  questionfound={questionfound}
                  onQuizfound={this.handleQuizFound}
                  onQuestionfound={this.handleQuestionFound}
                  quizzesAreLoaded={quizzesAreLoaded}
                />
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
                <AdminUserList users={users} onDelete={this.handleDeleteUser} />
              </>
            )}
          />
          <Route
            exact
            path="/admin/user_editor/:id"
            render={props => (
              <>
                <AdminNav />
                <AdminUserEditor
                  regions={regions}
                  restaurants={restaurants}
                  user={users.find(user => user.id === +props.match.params.id)}
                />
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
                  onDelete={this.handleDeleteRestaurant}
                />
              </>
            )}
          />
          <Route
            exact
            path="/admin/restaurant_creator"
            render={() => (
              <>
                <AdminNav />
                <AdminRestaurantCreator regions={regions} />
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
                  restaurant={restaurants.find(
                    res => res.id === +props.match.params.id
                  )}
                  regions={regions}
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
                <AdminProductCreator langOptions={langOptions} />
              </>
            )}
          />

          <Route
            exact
            path="/admin/product_editor/:id"
            render={props => (
              <>
                <AdminNav />
                <AdminProductEditor
                  langOptions={langOptions}
                  product={products.find(
                    prod => prod.id === +props.match.params.id
                  )}
                />
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

          {/* //Future feature for Learners */}

          {/* <Route
            exact
            path="/learners/login/forgot_password"
            render={() => (
              <>
                <LearnerNav />
                <ForgotPassword />
              </>
            )}
          /> */}

          {/* Learnes Auth */}
          <Route
            exact
            render={() => (
              <>
                <LearnersAuth restaurants={this.state.restaurants} />
              </>
            )}
          />
          {/* //Learnes Auth */}

          {/*Learners */}
          <Route
            exact
            render={() => (
              <>
                <Learners
                  documentation={this.state.documentation}
                  QuizList={this.state.quizzesLearner.quizzes}
                  changeQuizIDInPlay={this.changeQuizIDInPlay}
                  score={this.state.score}
                  checkScore={this.checkScore}
                  refreshQuizState={this.refreshQuizState}
                  questionPackage={this.state.quizzesLearner.quizzes}
                  startOverallTimer={this.startOverallTimer}
                  overallTime={this.state.overallTime}
                  addUserInputToState={this.addUserInputToState}
                  incrementQuizStep={this.incrementQuizStep}
                  reduceQuizStep={this.reduceQuizStep}
                  onClickAnswer={this.onClickAnswer}
                  step={this.state.step}
                  quizIDInPlay={this.state.quizIDInPlay}
                  stopTimer={this.stopTimer}
                  userAnswerClick={this.userAnswerClick}
                  userQuizAnswers={this.state.userQuizAnswers}
                  addUserIDFromTokenToState={this.addUserIDFromTokenToState}
                  postQuizResult={this.postQuizResult}
                  reduceQuizStep={this.reduceQuizStep}
                />
              </>
            )}
          />

          {/*//Learners */}
        </QuizzesContext.Provider>
      </LanguagesContext.Provider>
    );
  }
}

const langOptions = [
  {
    id: 1,
    name: "English"
  },
  {
    id: 2,
    name: "Português"
  }
];

const placeholderData = {
  quizzes: [
    {
      id: 1,
      name: "Quiz 1",
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
              answer_option:
                "An exclusive dine out social drinking membership program that extends special perks like free dishes and drinks.",
              question_id: 1
            },
            {
              id: 2,
              answer_option: "An app.",
              question_id: 1
            },
            {
              id: 3,
              answer_option: "A restaurant booking tool.",
              question_id: 1
            },
            {
              id: 4,
              answer_option: "A colour.",
              question_id: 1
            }
          ]
        },
        {
          id: 2,
          question: "What is a Visits Pack?",
          correct_answer_id: 2,
          quiz_id: 1,
          answers: [
            {
              id: 5,
              answer_option:
                "The Visits Pack lets you look around restaurant kichens for free.",
              question_id: 2
            },
            {
              id: 6,
              answer_option:
                "The Visits Pack gives you 3 Gold Visits that you can use at any of over 1200 partner restaurants any time you want.",
              question_id: 2
            },
            {
              id: 7,
              answer_option: "The Visits Pack lets a chef visit your house.",
              question_id: 2
            },
            {
              id: 8,
              answer_option: "Not sure.",
              question_id: 2
            }
          ]
        },
        {
          id: 3,
          question:
            "Can I get the benefits on food and drinks at the same restaurant? ",
          correct_answer_id: 3,
          quiz_id: 1,
          answers: [
            {
              id: 9,
              answer_option: "Food partners offer 8 dishes.",
              question_id: 3
            },
            {
              id: 10,
              answer_option: "Drink partners give complimentary drinks.",
              question_id: 3
            },
            {
              id: 11,
              answer_option:
                "Each partner restaurant offers only one of these benefits, IE our food partners offer 1 complimentary dish as a part of the meal, and our drinks partners offer upto 2 complimentary drinks per visit.",
              question_id: 3
            },
            {
              id: 12,
              answer_option: "Food partners will deliver food to your house.",
              question_id: 3
            }
          ]
        },
        {
          id: 4,
          question: "What does the benefits on drinks mean? ",
          correct_answer_id: 4,
          quiz_id: 1,
          answers: [
            {
              id: 13,
              answer_option: "Each Gold member gets free drinks all night.",
              question_id: 4
            },
            {
              id: 14,
              answer_option:
                "Gold Members get one drink for every meal they order.",
              question_id: 4
            },
            {
              id: 15,
              answer_option: "Gold members get 2 jars of sangria for free.",
              question_id: 4
            },
            {
              id: 16,
              answer_option:
                "Each Gold member gets one complimentary drink for every drink they order upto a maximum of 2 complimentary drinks.",
              question_id: 4
            }
          ]
        },
        {
          id: 5,
          question:
            "Can I apply more than one discount on my subscription purchase? ",
          correct_answer_id: 1,
          quiz_id: 1,
          answers: [
            {
              id: 17,
              answer_option:
                "You can only use one promo code when purchasing Zomato Gold unless otherwise stated.",
              question_id: 5
            },
            {
              id: 18,
              answer_option: "You can use as many promo codes as you want.",
              question_id: 5
            },
            {
              id: 19,
              answer_option: "I am not sure.",
              question_id: 5
            },
            {
              id: 20,
              answer_option: "You can use up to 2 extra promo codes.",
              question_id: 5
            }
          ]
        },
        {
          id: 6,
          question: "Can I combine Zomato Gold with other offers?",
          correct_answer_id: 2,
          quiz_id: 1,
          answers: [
            {
              id: 21,
              answer_option: "I am not sure.",
              question_id: 6
            },
            {
              id: 22,
              answer_option:
                "No Zomato Gold cannot be combined other promotions including Happy Hours, Loyalty Discounts, Bank offers or other special limited period offers.",
              question_id: 6
            },
            {
              id: 23,
              answer_option: "Yes.",
              question_id: 6
            },
            {
              id: 24,
              answer_option: "Maybe, except for Christmas.",
              question_id: 6
            }
          ]
        },
        {
          id: 7,
          question: "When should customers activate their Gold subscription? ",
          correct_answer_id: 3,
          quiz_id: 1,
          answers: [
            {
              id: 25,
              answer_option:
                "You must wear a Zomato Gold sticker at all times when in the restaurant to show you are a member.",
              question_id: 7
            },
            {
              id: 26,
              answer_option:
                "As soon as you get to the restaurant, let a staff member know that you are a Gold member and unlock your Gold Visit. Show the confirmation screen to the staff and then proceed with placing your food or drinks order.",
              question_id: 7
            },
            {
              id: 27,
              answer_option:
                "Zomato Gold members must pay with a Zomato Gold credit card.",
              question_id: 7
            },
            {
              id: 28,
              answer_option: "I am not sure.",
              question_id: 7
            }
          ]
        },
        {
          id: 8,
          question: "Is Zomato Gold valid on deliveries or takeaway? ",
          correct_answer_id: 4,
          quiz_id: 1,
          answers: [
            {
              id: 29,
              answer_option: "Yes - you can takeaway with Zomato Gold.",
              question_id: 8
            },
            {
              id: 30,
              answer_option: "Only at participating restaurants.",
              question_id: 8
            },
            {
              id: 31,
              answer_option:
                "Zomato Gold is valid at all restaurants and bars.",
              question_id: 8
            },
            {
              id: 32,
              answer_option:
                "No. Zomato Gold is valid only for dining out at our partner restaurants and bars.",
              question_id: 8
            }
          ]
        },
        {
          id: 9,
          question:
            "Can the restaurant partners change after I purchase the membership? ",
          correct_answer_id: 1,
          quiz_id: 1,
          answers: [
            {
              id: 33,
              answer_option:
                "Yes. Our restaurant partners may change over time. We keep adding new partners to the list, to expand the choices available to you.",
              question_id: 9
            },
            {
              id: 34,
              answer_option:
                "Restaurant partners are static and do not change.",
              question_id: 9
            },
            {
              id: 35,
              answer_option: "I am not sure.",
              question_id: 9
            },
            {
              id: 36,
              answer_option:
                "Yes apart from McDonalds and Burger King, which will never be on Zomato Gold.",
              question_id: 9
            }
          ]
        },
        {
          id: 10,
          question: "What does the benefits on food mean?",
          correct_answer_id: 2,
          quiz_id: 1,
          answers: [
            {
              id: 37,
              answer_option: "Each Gold member gets complimentary drinks.",
              question_id: 10
            },
            {
              id: 38,
              answer_option:
                "Each Gold member gets one complimentary drink for every drink they order, upto a maximum of 2 complimentary drinks.",
              question_id: 10
            },
            {
              id: 39,
              answer_option:
                "Only pitchers, buckets and non individual bottles are included.",
              question_id: 10
            },
            {
              id: 40,
              answer_option: "I am not sure.",
              question_id: 10
            }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "Zomato Services",
      user_type_id: 1,
      language_id: 1,
      product_id: 1,
      questions: [
        {
          id: 21,
          question: "Question 1",
          correct_answer_id: 1,
          quiz_id: 3,
          answers: [
            {
              id: 81,
              answer_option: "option 1",
              question_id: 21
            },
            {
              id: 82,
              answer_option: "option 2",
              question_id: 21
            },
            {
              id: 83,
              answer_option: "option 3",
              question_id: 21
            },
            {
              id: 84,
              answer_option: "option 4",
              question_id: 21
            }
          ]
        },
        {
          id: 22,
          question: "Question 2",
          correct_answer_id: 2,
          quiz_id: 3,
          answers: [
            {
              id: 85,
              answer_option: "option 1",
              question_id: 22
            },
            {
              id: 86,
              answer_option: "option 2",
              question_id: 22
            },
            {
              id: 87,
              answer_option: "option 3",
              question_id: 22
            },
            {
              id: 88,
              answer_option: "option 4",
              question_id: 22
            }
          ]
        },
        {
          id: 23,
          question: "Question 3",
          correct_answer_id: 3,
          quiz_id: 3,
          answers: [
            {
              id: 89,
              answer_option: "option 1",
              question_id: 23
            },
            {
              id: 90,
              answer_option: "option 2",
              question_id: 23
            },
            {
              id: 91,
              answer_option: "option 3",
              question_id: 23
            },
            {
              id: 92,
              answer_option: "option 4",
              question_id: 23
            }
          ]
        },
        {
          id: 24,
          question: "Question 4",
          correct_answer_id: 4,
          quiz_id: 3,
          answers: [
            {
              id: 93,
              answer_option: "option 1",
              question_id: 24
            },
            {
              id: 94,
              answer_option: "option 2",
              question_id: 24
            },
            {
              id: 95,
              answer_option: "option 3",
              question_id: 24
            },
            {
              id: 96,
              answer_option: "option 4",
              question_id: 24
            }
          ]
        },
        {
          id: 25,
          question: "Question 5",
          correct_answer_id: 1,
          quiz_id: 3,
          answers: [
            {
              id: 97,
              answer_option: "option 1",
              question_id: 25
            },
            {
              id: 98,
              answer_option: "option 2",
              question_id: 25
            },
            {
              id: 99,
              answer_option: "option 3",
              question_id: 25
            },
            {
              id: 100,
              answer_option: "option 4",
              question_id: 25
            }
          ]
        },
        {
          id: 26,
          question: "Question 6",
          correct_answer_id: 2,
          quiz_id: 3,
          answers: [
            {
              id: 101,
              answer_option: "option 1",
              question_id: 26
            },
            {
              id: 102,
              answer_option: "option 2",
              question_id: 26
            },
            {
              id: 103,
              answer_option: "option 3",
              question_id: 26
            },
            {
              id: 104,
              answer_option: "option 4",
              question_id: 26
            }
          ]
        },
        {
          id: 27,
          question: "Question 7",
          correct_answer_id: 3,
          quiz_id: 3,
          answers: [
            {
              id: 105,
              answer_option: "option 1",
              question_id: 27
            },
            {
              id: 106,
              answer_option: "option 2",
              question_id: 27
            },
            {
              id: 107,
              answer_option: "option 3",
              question_id: 27
            },
            {
              id: 108,
              answer_option: "option 4",
              question_id: 27
            }
          ]
        },
        {
          id: 28,
          question: "Question 8",
          correct_answer_id: 4,
          quiz_id: 3,
          answers: [
            {
              id: 109,
              answer_option: "option 1",
              question_id: 28
            },
            {
              id: 110,
              answer_option: "option 2",
              question_id: 28
            },
            {
              id: 111,
              answer_option: "option 3",
              question_id: 28
            },
            {
              id: 112,
              answer_option: "option 4",
              question_id: 28
            }
          ]
        },
        {
          id: 29,
          question: "Question 9",
          correct_answer_id: 1,
          quiz_id: 3,
          answers: [
            {
              id: 113,
              answer_option: "option 1",
              question_id: 29
            },
            {
              id: 114,
              answer_option: "option 2",
              question_id: 29
            },
            {
              id: 115,
              answer_option: "option 3",
              question_id: 29
            },
            {
              id: 116,
              answer_option: "option 4",
              question_id: 29
            }
          ]
        },
        {
          id: 30,
          question: "Question 10",
          correct_answer_id: 2,
          quiz_id: 3,
          answers: [
            {
              id: 117,
              answer_option: "option 1",
              question_id: 30
            },
            {
              id: 118,
              answer_option: "option 2",
              question_id: 30
            },
            {
              id: 119,
              answer_option: "option 3",
              question_id: 30
            },
            {
              id: 120,
              answer_option: "option 4",
              question_id: 30
            }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Zomato - Foundations",
      user_type_id: 1,
      language_id: 1,
      product_id: 1,
      questions: [
        {
          id: 41,
          question: "Question 1",
          correct_answer_id: 1,
          quiz_id: 5,
          answers: [
            {
              id: 161,
              answer_option: "option 1",
              question_id: 41
            },
            {
              id: 162,
              answer_option: "option 2",
              question_id: 41
            },
            {
              id: 163,
              answer_option: "option 3",
              question_id: 41
            },
            {
              id: 164,
              answer_option: "option 4",
              question_id: 41
            }
          ]
        },
        {
          id: 42,
          question: "Question 2",
          correct_answer_id: 2,
          quiz_id: 5,
          answers: [
            {
              id: 165,
              answer_option: "option 1",
              question_id: 42
            },
            {
              id: 166,
              answer_option: "option 2",
              question_id: 42
            },
            {
              id: 167,
              answer_option: "option 3",
              question_id: 42
            },
            {
              id: 168,
              answer_option: "option 4",
              question_id: 42
            }
          ]
        },
        {
          id: 43,
          question: "Question 3",
          correct_answer_id: 3,
          quiz_id: 5,
          answers: [
            {
              id: 169,
              answer_option: "option 1",
              question_id: 43
            },
            {
              id: 170,
              answer_option: "option 2",
              question_id: 43
            },
            {
              id: 171,
              answer_option: "option 3",
              question_id: 43
            },
            {
              id: 172,
              answer_option: "option 4",
              question_id: 43
            }
          ]
        },
        {
          id: 44,
          question: "Question 4",
          correct_answer_id: 4,
          quiz_id: 5,
          answers: [
            {
              id: 173,
              answer_option: "option 1",
              question_id: 44
            },
            {
              id: 174,
              answer_option: "option 2",
              question_id: 44
            },
            {
              id: 175,
              answer_option: "option 3",
              question_id: 44
            },
            {
              id: 176,
              answer_option: "option 4",
              question_id: 44
            }
          ]
        },
        {
          id: 45,
          question: "Question 5",
          correct_answer_id: 1,
          quiz_id: 5,
          answers: [
            {
              id: 177,
              answer_option: "option 1",
              question_id: 45
            },
            {
              id: 178,
              answer_option: "option 2",
              question_id: 45
            },
            {
              id: 179,
              answer_option: "option 3",
              question_id: 45
            },
            {
              id: 180,
              answer_option: "option 4",
              question_id: 45
            }
          ]
        },
        {
          id: 46,
          question: "Question 6",
          correct_answer_id: 2,
          quiz_id: 5,
          answers: [
            {
              id: 181,
              answer_option: "option 1",
              question_id: 46
            },
            {
              id: 182,
              answer_option: "option 2",
              question_id: 46
            },
            {
              id: 183,
              answer_option: "option 3",
              question_id: 46
            },
            {
              id: 184,
              answer_option: "option 4",
              question_id: 46
            }
          ]
        },
        {
          id: 47,
          question: "Question 7",
          correct_answer_id: 3,
          quiz_id: 5,
          answers: [
            {
              id: 185,
              answer_option: "option 1",
              question_id: 47
            },
            {
              id: 186,
              answer_option: "option 2",
              question_id: 47
            },
            {
              id: 187,
              answer_option: "option 3",
              question_id: 47
            },
            {
              id: 188,
              answer_option: "option 4",
              question_id: 47
            }
          ]
        },
        {
          id: 48,
          question: "Question 8",
          correct_answer_id: 4,
          quiz_id: 5,
          answers: [
            {
              id: 189,
              answer_option: "option 1",
              question_id: 48
            },
            {
              id: 190,
              answer_option: "option 2",
              question_id: 48
            },
            {
              id: 191,
              answer_option: "option 3",
              question_id: 48
            },
            {
              id: 192,
              answer_option: "option 4",
              question_id: 48
            }
          ]
        },
        {
          id: 49,
          question: "Question 9",
          correct_answer_id: 1,
          quiz_id: 5,
          answers: [
            {
              id: 193,
              answer_option: "option 1",
              question_id: 49
            },
            {
              id: 194,
              answer_option: "option 2",
              question_id: 49
            },
            {
              id: 195,
              answer_option: "option 3",
              question_id: 49
            },
            {
              id: 196,
              answer_option: "option 4",
              question_id: 49
            }
          ]
        },
        {
          id: 50,
          question: "Question 10",
          correct_answer_id: 2,
          quiz_id: 5,
          answers: [
            {
              id: 197,
              answer_option: "option 1",
              question_id: 50
            },
            {
              id: 198,
              answer_option: "option 2",
              question_id: 50
            },
            {
              id: 199,
              answer_option: "option 3",
              question_id: 50
            },
            {
              id: 200,
              answer_option: "option 4",
              question_id: 50
            }
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Zomato - Employee Quiz",
      user_type_id: 2,
      language_id: 1,
      product_id: 1,
      questions: [
        {
          id: 61,
          question: "Question 1",
          correct_answer_id: 1,
          quiz_id: 7,
          answers: [
            {
              id: 241,
              answer_option: "option 1",
              question_id: 61
            },
            {
              id: 242,
              answer_option: "option 2",
              question_id: 61
            },
            {
              id: 243,
              answer_option: "option 3",
              question_id: 61
            },
            {
              id: 244,
              answer_option: "option 4",
              question_id: 61
            }
          ]
        },
        {
          id: 62,
          question: "Question 2",
          correct_answer_id: 2,
          quiz_id: 7,
          answers: [
            {
              id: 245,
              answer_option: "option 1",
              question_id: 62
            },
            {
              id: 246,
              answer_option: "option 2",
              question_id: 62
            },
            {
              id: 247,
              answer_option: "option 3",
              question_id: 62
            },
            {
              id: 248,
              answer_option: "option 4",
              question_id: 62
            }
          ]
        },
        {
          id: 63,
          question: "Question 3",
          correct_answer_id: 3,
          quiz_id: 7,
          answers: [
            {
              id: 249,
              answer_option: "option 1",
              question_id: 63
            },
            {
              id: 250,
              answer_option: "option 2",
              question_id: 63
            },
            {
              id: 251,
              answer_option: "option 3",
              question_id: 63
            },
            {
              id: 252,
              answer_option: "option 4",
              question_id: 63
            }
          ]
        },
        {
          id: 64,
          question: "Question 4",
          correct_answer_id: 4,
          quiz_id: 7,
          answers: [
            {
              id: 253,
              answer_option: "option 1",
              question_id: 64
            },
            {
              id: 254,
              answer_option: "option 2",
              question_id: 64
            },
            {
              id: 255,
              answer_option: "option 3",
              question_id: 64
            },
            {
              id: 256,
              answer_option: "option 4",
              question_id: 64
            }
          ]
        },
        {
          id: 65,
          question: "Question 5",
          correct_answer_id: 1,
          quiz_id: 7,
          answers: [
            {
              id: 257,
              answer_option: "option 1",
              question_id: 65
            },
            {
              id: 258,
              answer_option: "option 2",
              question_id: 65
            },
            {
              id: 259,
              answer_option: "option 3",
              question_id: 65
            },
            {
              id: 260,
              answer_option: "option 4",
              question_id: 65
            }
          ]
        },
        {
          id: 66,
          question: "Question 6",
          correct_answer_id: 2,
          quiz_id: 7,
          answers: [
            {
              id: 261,
              answer_option: "option 1",
              question_id: 66
            },
            {
              id: 262,
              answer_option: "option 2",
              question_id: 66
            },
            {
              id: 263,
              answer_option: "option 3",
              question_id: 66
            },
            {
              id: 264,
              answer_option: "option 4",
              question_id: 66
            }
          ]
        },
        {
          id: 67,
          question: "Question 7",
          correct_answer_id: 3,
          quiz_id: 7,
          answers: [
            {
              id: 265,
              answer_option: "option 1",
              question_id: 67
            },
            {
              id: 266,
              answer_option: "option 2",
              question_id: 67
            },
            {
              id: 267,
              answer_option: "option 3",
              question_id: 67
            },
            {
              id: 268,
              answer_option: "option 4",
              question_id: 67
            }
          ]
        },
        {
          id: 68,
          question: "Question 8",
          correct_answer_id: 4,
          quiz_id: 7,
          answers: [
            {
              id: 269,
              answer_option: "option 1",
              question_id: 68
            },
            {
              id: 270,
              answer_option: "option 2",
              question_id: 68
            },
            {
              id: 271,
              answer_option: "option 3",
              question_id: 68
            },
            {
              id: 272,
              answer_option: "option 4",
              question_id: 68
            }
          ]
        },
        {
          id: 69,
          question: "Question 9",
          correct_answer_id: 1,
          quiz_id: 7,
          answers: [
            {
              id: 273,
              answer_option: "option 1",
              question_id: 69
            },
            {
              id: 274,
              answer_option: "option 2",
              question_id: 69
            },
            {
              id: 275,
              answer_option: "option 3",
              question_id: 69
            },
            {
              id: 276,
              answer_option: "option 4",
              question_id: 69
            }
          ]
        },
        {
          id: 70,
          question: "Question 10",
          correct_answer_id: 2,
          quiz_id: 7,
          answers: [
            {
              id: 277,
              answer_option: "option 1",
              question_id: 70
            },
            {
              id: 278,
              answer_option: "option 2",
              question_id: 70
            },
            {
              id: 279,
              answer_option: "option 3",
              question_id: 70
            },
            {
              id: 280,
              answer_option: "option 4",
              question_id: 70
            },
            {
              id: 321,
              answer_option: "option 1",
              question_id: 70
            },
            {
              id: 322,
              answer_option: "option 2",
              question_id: 70
            },
            {
              id: 323,
              answer_option: "option 3",
              question_id: 70
            },
            {
              id: 324,
              answer_option: "option 4",
              question_id: 70
            }
          ]
        }
      ]
    }
  ]
};

export default withRouter(App);
