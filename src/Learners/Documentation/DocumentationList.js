import React from 'react';
import DocumentationItem from './DocumentationItem';


const DocumentationList = ({ docs }) => (
    // put condition for none found here +  sorry message
  docs.map((doc) => (
    <DocumentationItem doc={doc} />
  ))
);

export default DocumentationList;
