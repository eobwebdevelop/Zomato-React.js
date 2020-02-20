import React from 'react';
import PropTypes from 'prop-types';
import FaqItem from './FAQItem';
import NoFaq from './NoFAQ';

const FaqList = ({ faqs }) => {
  const displayOptions = () => {
    if (faqs[0]) {
      return faqs.map((faq) => (
        <FaqItem faq={faq} />
      ));
    } return <NoFaq />;
  };

  return (
    <>
      {displayOptions()}
    </>
  );
};

FaqList.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
    }).isRequired,
  ).isRequired,
};

export default FaqList;
