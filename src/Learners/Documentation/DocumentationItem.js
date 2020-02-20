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
      return doc.content;
    } if (doc.content.length > 300) {
      return `${doc.content.substring(0, 300)}...`;
    } return doc.content.substring(0, 300);
  };

  const pickClass = () => {
    if (doc.content.length < 300) {
      return 'hidden';
    } return 'more-btn';
  };

  return (
    <article key={doc.id} className="single-doc">
      <h3>{doc.title}</h3>
      <div>{ReactHtmlParser(contentText())}</div>
      <button
        type="submit"
        onClick={() => onClick()}
        className={pickClass()}
      >
        {buttonText()}
      </button>
    </article>
  );
};

DocumentationItem.propTypes = {
  doc: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default DocumentationItem;
