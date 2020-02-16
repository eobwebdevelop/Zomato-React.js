import React, {  Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
// import { render } from '@testing-library/react';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';
import './Documentation.css';

class Documentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      resultDocs: [],
    };
  }

  handleChange = (e) => {
    this.setState({query: e.target.value});
  }

  handleSearch = () => {

    if(this.state.query.length < 1){
      this.setState({resultDocs: []});  
    }else if(this.state.query.length >= 1){
      let query = new RegExp(this.state.query, 'gi');  
  
      this.props.documentation.map((doc) => {
        if(doc.title.match(query) !== null){
          this.setState((prevState) => ({
            resultDocs: [...prevState.resultDocs, doc]
          }));  
        }
      });
      if(!this.state.resultDocs[0]){
        console.log('no match found')
        // if no docs are returned say ooops couldn't find anything 
      }
    }

    // show See All Documentation BUTTON
    // <button onclick={handleBackToAllDocs}> See all documentation </button>
    // handleBackToAllDocs = () => {
    //  this.setState({resultDocs: []});   
    //}
  }

  pickDocs = () => this.state.resultDocs[0] ? this.state.resultDocs : this.props.documentation

  // handleDisplay = () => {
  //   if( search return nothing aka map is not possible)
  // <h1> No results found. </h1>
  // AL: CAN WE STILL SHOW ALL THE DOCS AS WELL AS A COUNDN'T FIND MESSAGE OR IS IT BETTER TO SHOW ONLY THE MESSAGE??
  // };

  render() {
    const { query } = this.state;
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <Container>
            <h1>{translations[currentLanguage].Documentation.Title}</h1>
            <hr/>
            <div className="search-bar">
              <input type="text" value={query} onChange={this.handleChange} />
              <button 
                type="submit" 
                className="btn" 
                onClick={this.handleSearch}
              >
                Search
              </button>
            </div>
            {
            this.pickDocs().map((doc) => (
              <article key={doc.id} className="single-doc">
                <header>
                  <h1>{doc.title}</h1>
                </header>
                <div>{ReactHtmlParser(doc.content)}</div>
              </article>
            ))
          }
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
