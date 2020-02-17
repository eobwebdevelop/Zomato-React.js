import React, {  Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
// import { render } from '@testing-library/react';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';
import './Documentation.css';
import DocumentationList from './DocumentationList';


class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange = (e) => {
    this.setState({query: e.target.value});
  }

  checkIfMatchQuery = (doc) => {
    const query = this.state.query.toLowerCase();
    if(this.state.query === ''){return true}
    return doc.title.toLowerCase().match(query);
  };

  render() {
    const { query } = this.state;
    const { documentation } = this.props;
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <Container>
            <h1>{translations[currentLanguage].Documentation.Title}</h1>
            <hr/>
            <div className="search-bar">
              <input type="text" value={query} onChange={this.handleChange} />
              {/* <button 
                type="submit" 
                className="btn" 
                onClick={this.handleSearch}
              >
                Search
              </button> */}
            </div>

            <DocumentationList docs={documentation.filter((doc) => this.checkIfMatchQuery(doc))} />

            <Link to="/learners/quiz_list">
              <button type="submit" className="btn">
                {translations[currentLanguage].Documentation.Button}
              </button>
            </Link>
          </Container>
        )}
      </LanguagesContext.Consumer>
    );
  }
}

Documentation.propTypes = {
  documentation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Documentation;
