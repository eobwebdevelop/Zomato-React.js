import React, { Component } from "react";
import "./App.css";

import { Redirect, Route, withRouter, matchPath } from "react-router-dom";

// Switch, withRouter
//import { Navbar, Nav, NavDropdown } from "react-bootstrap";

//Routers
import LearnersAuth from "./Routers/LearnersAuth";
import Learners from "./Routers/Learners";

// Admin portal imports
import AdminNav from "./Admin/AdminNav.js"; 
import AdminQuizList from "./Admin/AdminQuizList"; 
import AdminQuizMaker from "./Admin/AdminQuizMaker"; 
import AdminQuizEditor from "./Admin/AdminQuizEditor"; 
import AdminUserEditor from "./Admin/AdminUserEditor";
import AdminDocList from "./Admin/AdminDocList"; 
import AdminDocEditor from "./Admin/AdminDocEditor";
import AdminFaqList from "./Admin/AdminFaqList";
import AdminFaqEditor from "./Admin/AdminFaqEditor";
import AdminRestaurantEditor from "./Admin/AdminRestaurantEditor";
import AdminRestaurantCreator from "./Admin/AdminRestaurantCreator";
import AdminRestaurantList from "./Admin/AdminRestaurantList";
import AdminProductCreator from "./Admin/AdminProductCreator";
import AdminHomePage from "./Admin/AdminHomePage";
import AdminProductEditor from "./Admin/AdminProductEditor";
import AdminProductList from "./Admin/AdminProductList";
import AdminUserList from "./Admin/AdminUserList";
import AdminResultList from "./Admin/AdminResultList";
import AdminQuestionEditor from "./Admin/AdminQuestionEditor";
import AdminExportData from "./Admin/AdminExportData";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLanguage: availableLanguages.pt,
      quizzesLearner: [],
      placeholderData: [],
      // Step defines which question you are seeing. Step 0 - 9 are questions, step 10 is results.
      step: 0,
      // Overalltime counts upwards until you are at step 10 i.e. results.
      overallTime: 0,
      // Score out of 10
      score: 0,
      // Check whether questions are loaded, else we need to display loading screen when opening quiz.
      quizzesAreLoaded: false,
      // This defines which QuizID the user is playing. Needs to update with the quiz number used on ""
      quizIDInPlay: 1,
      quizNameInPlay: "TestString",
      timerRunning: false,
      userQuizAnswers: [],
      token: "",
      userID: null,
      currentUser: { userID: null, isadmin: null, userTypeId: null },
      // userid should match auth to post the right quiz result
      products: [{ id: 0, name: "", description: "" }],
      users: [{ id: 0, first_name: "" }],
      restaurants: [{ id: 0, name: "", region: 0 }],
      regions: [{ id: 0, name: "" }],
      results: [{ id: 0, name: "" }],
      documentation: [],
      adminFaq: [],
      learnerFaq: [],
      langOptions: langOptions,
      quizzes: [{ id: 0, name: "" }],
      selectedDoc: {
        title: '',
        content: '',
        product_id: undefined, 
      },
      selectedFaq: {
        question: '',
        content: '',
        language_id: undefined, 
        language_name: ''
      },
      flash: ''
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
    if (!this.state.token) return null;
    const options = {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${this.state.token}` })
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/region`, options)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          regions: data.Region
        }));
      });
  };

  getResults = () => {
    if (!this.state.token) return null;
    const options = {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${this.state.token}` })
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/result`, options)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          results: data.Results
        }));
      });
  };

  getRestaurants = () => {
    if (!this.state.token) return null;
    const options = {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${this.state.token}` })
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/restaurant`, options)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          restaurants: data.Restaurant
        }));
      });
  };

  getQuizzesByLang = () => {
    if (!this.state.token) return null;

    fetch(`${process.env.REACT_APP_SERVER_URL}/learner/quiz`, {
      method: "GET",
      headers: new Headers({
        "Preferred-Language": this.state.currentLanguage
      })
    })
      .then(response => response.json())
      .then(data => {
        let filteredByUserID =
          this.state.userTypeID === 3
            ? data.quizzes.filter(
                el => el.currentUser.user_type_id === this.state.userTypeID
              )
            : data.quizzes;

        this.setState(state => ({
          ...state,
          quizzesLearner: filteredByUserID
        }));
      });
  };

  getQuizzes = () => {
    if (!this.state.token) return null;

    this.setState({ quizzesAreLoaded: false }, () => {
      const options = {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${this.state.token}` })
      };
      fetch(`${process.env.REACT_APP_SERVER_URL}/admin/quiz`, options)
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
    if (!this.state.token) return null;
    const options = {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${this.state.token}` })
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/doc`, options)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          documentation: data.Documentation
        }));
      });
  };

  getFaqs = () => {
    if (!this.state.token) return null;

    this.setState({ faqsAreLoaded: false }, () => {
      fetch(`${process.env.REACT_APP_SERVER_URL}/admin/faq`)
        .then(response => response.json())
        .then(data => {
          this.setState(state => ({
            ...state,
            adminFaq: data.faqs
          }));
        });
    });
  };

  getFaqsByLang = () => {
    if (!this.state.token) return null;

    fetch(`${process.env.REACT_APP_SERVER_URL}/learner/faq`, {
      method: "GET",
      headers: new Headers({
        "Preferred-Language": this.state.currentLanguage
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          ...this.state,
          learnerFaq: data.faqs
        });
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
    const user_id = this.state.currentUser.userID.toString();
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
    try {
      this.setState({
        currentUser: {
          userTypeID: jwtDecode(this.state.token).user_type_id,
          userID: jwtDecode(this.state.token).id,
          isadmin: jwtDecode(this.state.token).isadmin
        }
      });
    } catch {
      return;
    }
  }

  getProducts = () => {
    if (!this.state.token) return null;
    const options = {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${this.state.token}` })
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/product`, options)
      .then(response => response.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          products: data.product
        }));
      });
  };

  getUsers = () => {
    if (!this.state.token) return null;
    const options = {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${this.state.token}` })
    };
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/user`, options)
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
        this.addUserIDFromTokenToState();
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
      this.getFaqs();
      this.getFaqsByLang();
    }
  }

  handleLogin = (email, password) => {
    const { currentLanguage } = this.state;

    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "Preferred-Language": currentLanguage
      }),
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          flash: res.flash,
          token: res.token ? res.token : '',
        }, () => {
          if(res.token) {
            this.props.history.push("/learners/quiz_list");
            this.getQuizzesByLang();
            localStorage.setItem("token", JSON.stringify(res.token));
          }
        })
      });
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

  handleDeleteFaq = id => {
    this.handleDelete(id, "faq", () => {
      const updatedFaq = this.state.adminFaq.filter(faq => faq.id !== id);
      this.setState({ adminFaq: updatedFaq });
    });
  };

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

  handleDocEdit = doc => {
    this.setState({
      selectedDoc: doc
    });
  };

  handleEditFaq = faq => {
    this.setState({
      selectedFaq: faq
    });
  };

  clearTokenLogOut = () => {
    this.setState({
      token: "",
      userID: null,
      currentUser: { userID: null, isadmin: null }
    });
    localStorage.clear();
  };
  // updateDocList = doc => {
  //   //if create, just add
  //   this.setState(prevState => {
  //     let addCreatedDoc = this.state.documentation + doc;
  //     return { documentation: addCreatedDoc };
  //   });

  //   //if edit, must replace
  //   // this.handleDelete(id, "doc", () => {
  //   //   const updatedDocs = this.state.documentation.filter(doc => doc.id !== id);
  //   //   this.setState({ documentation: updatedDocs });
  //   // });
  // };

  clearSelectedDoc = () => {
    this.setState({selectedDoc: {
      title: '',
      content: '',
      product_id: undefined 
    }})
  }
  clearSelectedFaq = () => {
    this.setState({selectedFaq: {
      question: '',
      content: '',
      language_id: undefined 
    }})
  }

  render() {
    const {
      currentLanguage,
      quizzes,
      documentation,
      selectedDoc,
      selectedFaq,
      adminFaq,
      products,
      users,
      restaurants,
      regions,
      results,
      quizzesAreLoaded,
      quizfound,
      questionfound
    } = this.state;

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
          {/* ADMIN */}


          <Route
            exact
            path="/admin"
            render={() => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminHomePage />
              </>
            )}
          />
          {/* {Documentation } */}
          <Route
            exact
            path="/admin/doc_list"
            render={() => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminDocList
                  documentation={documentation}
                  onDelete={this.handleDeleteDoc}
                  onDocEdit={this.handleDocEdit}
                />
              </>
            )}
          />
          <Route
            path="/admin/doc_editor"
            render={() => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminDocEditor
                  products={products}
                  documentation={documentation}
                  selectedDoc={selectedDoc}
                  updateDocList={this.updateDocList}
                  clearSelectedDoc={this.clearSelectedDoc}
                />
              </>
            )}
          />
          {/* { Faq }*/}
          <Route
            exact
            path="/admin/faq_list"
            render={() => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminFaqList
                  adminFaq={adminFaq}
                  onDelete={this.handleDeleteFaq}
                  onEdit={this.handleEditFaq}
                />
              </>
            )}
          /> 
          <Route
            path="/admin/faq_editor"
            render={() => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminFaqEditor
                  adminFaq={adminFaq}
                  selectedFaq={selectedFaq}
                  langOptions={langOptions}
                  clearSelectedFaq={this.clearSelectedFaq}
                />
              </>
            )}
          />
          {/* {QUIZ } */}
          <Route
            exact
            path="/admin/quiz_list"
            render={() => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminQuizList onDelete={this.handleDeleteQuiz} />
              </>
            )}
          />
          <Route
            exact
            path="/admin/quiz_maker"
            render={() => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminQuizMaker products={products} />
              </>
            )}
          />
          <Route
            exact
            path="/admin/quiz_editor/:id"
            render={props => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminQuizEditor onEdit={this.handleEditQuestion} />
              </>
            )}
          />
          <Route
            exact
            path="/admin/quiz_editor/:id/questions/:qid"
            render={() => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
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
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminUserList users={users} onDelete={this.handleDeleteUser} />
              </>
            )}
          />
          <Route
            exact
            path="/admin/user_editor/:id"
            render={props => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
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
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
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
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminRestaurantCreator regions={regions} />
              </>
            )}
          />
          <Route
            exact
            path="/admin/restaurant_editor/:id"
            render={props => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
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
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
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
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
                <AdminProductCreator langOptions={langOptions} />
              </>
            )}
          />
          <Route
            exact
            path="/admin/export_data"
            render={() => (
              <>
                <AdminNav />
                <AdminExportData />
              </>
            )}
          />

          <Route
            exact
            path="/admin/product_editor/:id"
            render={props => (
              <>
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
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
                <AdminNav clearTokenLogOut={this.clearTokenLogOut} />
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
            render={() => <LearnersAuth 
              restaurants={this.state.restaurants} 
              onLogin={this.handleLogin}
              flash={this.state.flash}
            />}
          />
          {/* //Learnes Auth */}
          {/*Learners */}
          <Route
            exact
            render={() => (
              <>
                <Learners
                  token={this.state.token}
                  clearTokenLogOut={this.clearTokenLogOut}
                  currentUser={this.state.currentUser}
                  documentation={this.state.documentation}
                  QuizList={this.state.quizzesLearner}
                  changeQuizIDInPlay={this.changeQuizIDInPlay}
                  score={this.state.score}
                  checkScore={this.checkScore}
                  refreshQuizState={this.refreshQuizState}
                  questionPackage={this.state.quizzesLearner}
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
                  postQuizResult={this.postQuizResult}
                  reduceQuizStep={this.reduceQuizStep}
                  learnerFaq={this.state.learnerFaq}
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

export default withRouter(App);
