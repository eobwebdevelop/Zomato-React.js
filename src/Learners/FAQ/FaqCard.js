import React from 'react';
import PropTypes from 'prop-types';

const FaqCard = ({ Faq, FaqC }) => (
  <>
    <h2>{Faq}</h2>
    <p>{FaqC}</p>
  </>

);

FaqCard.propTypes = {
  Faq: PropTypes.string.isRequired,
  FaqC: PropTypes.string.isRequired,
}.isRequired;


export default FaqCard;
