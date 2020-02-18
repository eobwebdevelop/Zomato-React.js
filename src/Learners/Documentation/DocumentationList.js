import React from 'react';
import PropTypes from 'prop-types';
import DocumentationItem from './DocumentationItem';
import NoDocumentation from './NoDocumentation';


const DocumentationList = ({ docs }) => {
  const displayOptions = () => {
    if (docs[0]) {
      return docs.map((doc) => (
        <DocumentationItem doc={doc} />
      ));
    } return <NoDocumentation />;
  };

  return (
    <div>
      {
     displayOptions()
    }
    </div>
  );
};

DocumentationList.propTypes = {
  docs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default DocumentationList;
