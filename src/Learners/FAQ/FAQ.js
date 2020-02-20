import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import LanguagesContext from "../../contexts/languages-context";
import translations from "../../i18n/translations";
import "../Documentation/Documentation.css";
import FaqList from "./FAQList";
import { withRouter } from "react-router-dom";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  checkIfMatchQuery = faq => {
    const query = this.state.query.toLowerCase();
    if (this.state.query === "") {
      return true;
    }
    return faq.faq_question.toLowerCase().match(query);
  };

  render() {
    const { query } = this.state;
    const { learnerFaq} = this.props;
    
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <Container>
            <h1>{translations[currentLanguage].FAQ.Title}</h1>
            <hr />
            <div className="search-bar">
            {/* EW: This button goes back, not to home. This is necessary in the user flow when taking the quiz: They go from results => documentation and need to be able to back to their results.*/}
              <button
                type="submit"
                className="btn"
                onClick={() => this.props.history.goBack()}
              >
                {translations[currentLanguage].FAQ.Button}
              </button>
              <input 
                placeholder="Search"
                type="text" 
                value={query} 
                onChange={this.handleChange} 
                className="search-input"
              />
            </div>
            <div className="docs-container">
            <FaqList
              faqs={learnerFaq.filter(faq => this.checkIfMatchQuery(faq))}
              />
            </div>
          </Container>
        )}
      </LanguagesContext.Consumer>
    );
  }
}

Faq.propTypes = {
  learnerFaq: PropTypes.arrayOf(
    PropTypes.shape({
    }).isRequired
  ).isRequired
};

export default withRouter(Faq);



// const FAQ = ({ learnerFaq }) => {
//   const { currentLanguage } = useContext(LanguagesContext);
//   const history = useHistory();
//   if (!learnerFaq) {
//     return (
//       <Container>
//         <h1>Loading...</h1>
//       </Container>
//     );
//   }

//   // if (FAQ.length === 0) {
//   //   return (
//   //     <Container>
//   //       <h1>{translations[currentLanguage].FAQ.Title}</h1>
//   //       <hr />
//   //       <h1>{translations[currentLanguage].FAQ.Error}</h1>
//   //     </Container>
//   //   );
//   // }

//   return (
//     <>
//       <div>
//         <Container>
//           <h1>{translations[currentLanguage].FAQ.Title}</h1>
//           <hr />

//           {learnerFaq.map((el) => (
//             <FaqCard key={el.id} Faq={el.faq_question} FaqC={ReactHtmlParser(el.content)} />
//           ))}

//           <button
//             type="submit"
//             className="btn"
//             onClick={() => history.goBack()}
//           >
//             {translations[currentLanguage].FAQ.Button}
//           </button>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default FAQ;
