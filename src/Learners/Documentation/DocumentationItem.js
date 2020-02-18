import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const DocumentationItem = ({ doc }) => (
  <article key={doc.id} className="single-doc">
    <header>
      <h1>{doc.title}</h1>
    </header>
    <div>{ReactHtmlParser(doc.content)}</div>
  </article>
);

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
