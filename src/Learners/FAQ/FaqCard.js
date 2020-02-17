import React, { Component } from 'react';



class FaqCard extends Component {
  render() {
    const { Faq, FaqC } = this.props;

    return (
      <>
        <h2>{Faq}</h2>
        <p>{FaqC}</p>
      </>

    );
  }
}
export default FaqCard;
