import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


const FaqItem = ({ faq }) => {
  const [showAllFaq, setShowAllFaq] = useState(false);

  const onClick = () => {
    setShowAllFaq(!showAllFaq);
  };

  const buttonText = () => {
    if (showAllFaq) {
      return <p> Hide </p>;
    }
    return <p> Read More </p>;
  };

  const contentText = () => {
    if (showAllFaq) {
      return faq.content;
    } if (faq.content.length > 300) {
      return `${(faq.content.substring(0, 300))}...`;
    } return faq.content.substring(0, 300);
  };

  const pickClass = () => {
    if (faq.content.length < 300) {
      return 'hidden';
    } return 'more-btn';
  };

  return (
    <article key={faq.id} className="single-doc">
      <h3>{faq.faq_question}</h3>
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

FaqItem.propTypes = {
  faq: PropTypes.shape({
    id: PropTypes.number.isRequired,
    faq_question: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default FaqItem;
