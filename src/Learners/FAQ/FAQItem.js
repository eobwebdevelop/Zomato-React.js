import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


const FaqItem = ({ faq }) => {
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
      return ReactHtmlParser(faq.content);
    }
    return ReactHtmlParser(faq.content.substring(0, 300));
  };

  const pickClass = () => {
    if (faq.content.length < 300) {
      return 'hidden';
    } return 'btn';
  };

  return (
    <article key={faq.id} className="single-doc">
      <h1>{faq.title}</h1>
      <div>{contentText()}</div>
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

FaqItem.propTypes = {
  faq: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default FaqItem;
