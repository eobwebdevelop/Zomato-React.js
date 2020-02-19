import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";
// import { render } from '@testing-library/react';
import LanguagesContext from "../../contexts/languages-context";
import translations from "../../i18n/translations";
import "./Documentation.css";
import DocumentationList from "./DocumentationList";
import { Link, withRouter } from "react-router-dom";

class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  checkIfMatchQuery = doc => {
    const query = this.state.query.toLowerCase();
    if (this.state.query === "") {
      return true;
    }
    return doc.title.toLowerCase().match(query);
  };

  render() {
    const { query } = this.state;
    const { learnerDoc} = this.props;
    
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <Container>
            <h1>{translations[currentLanguage].Documentation.Title}</h1>
            <hr />
            <div className="search-bar">
            {/* EW: This button goes back, not to home. This is necessary in the user flow when taking the quiz: They go from results => documentation and need to be able to back to their results.*/}
              <button
                type="submit"
                className="btn"
                onClick={() => this.props.history.goBack()}
              >
                {translations[currentLanguage].Documentation.Button}
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
            <DocumentationList
              docs={learnerDoc.filter(doc => this.checkIfMatchQuery(doc))}
              />
            </div>
          </Container>
        )}
      </LanguagesContext.Consumer>
    );
  }
}

Documentation.propTypes = {
  learnerDoc: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default withRouter(Documentation);
