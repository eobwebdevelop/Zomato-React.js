import React, { useContext, Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import LanguagesContext from '../../contexts/languages-context';
import translations from '../../i18n/translations';


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

  handleSearch = () => {
    let query = new RegExp(this.state.query, 'gi');  

    this.props.documentation.map((doc) => {
      if(doc.title.match(query) === null){
          console.log('hide this', doc.title)
        }else{
          console.log('this matches', doc.title)
          } 
          
    });
    console.log('i was clicked')
  }

  render() {
    // const { currentLanguage } = useContext(LanguagesContext);
    const { documentation } = this.props;
    const { query } = this.state;
    return (
      <LanguagesContext.Consumer>
        {({ currentLanguage }) => (
          <Container>
            <h1>{translations[currentLanguage].Documentation.Title}</h1>
            <div>
              <input type="text" value={query} onChange={this.handleChange} />
              <input type="submit" value="Search" onClick={this.handleSearch} />
            </div>
            <hr />
            {
            documentation.map((doc) => (
              <article key={doc.id}>
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
