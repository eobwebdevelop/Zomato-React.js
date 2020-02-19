import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


const DocumentationItem = ({ doc }) => {

  const [showAllDoc, setShowAllDoc] = useState(false);

  const onClick = () => {
    setShowAllDoc(!showAllDoc);
  };

  const buttonText = () => {
    if (showAllDoc) {
      return <p> Hide </p>;
    }
    return <p> Read More </p>;
  };

  const contentText = () => {
    if (showAllDoc) {
      return ReactHtmlParser(doc.content);
    }
    return ReactHtmlParser(doc.content.substring(0, 300));
  };


  return (
    <article key={doc.id} className="single-doc">
      <header>
        <h1>{doc.title}</h1>
      </header>
      <div>
        {contentText()}
      </div>
      <button type="submit" onClick={() => onClick()}>
        {buttonText()}
      </button>
    </article>
  );
};

DocumentationItem.propTypes = {
  doc: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default DocumentationItem;
