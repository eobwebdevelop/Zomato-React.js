import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const AdminDocList = () => {
  const [allDocs, setAllDocs] = useState([]);

  const getAllDocs = () => {
    fetch(process.env.REACT_APP_PATH_ADMIN_DOC)
      .then((response) => response.json())
      .then((data) => {
        setAllDocs(data.Documentation);
      });
  };

  useEffect(() => {
    getAllDocs();
  }, []);

  return (
    <Container>
      <Link to="/Admin/AdminDocEditor">
        <button type="submit" className="btn">
          Add New Documentation
        </button>
      </Link>
      <br />
      <Link to="/">
        <button type="submit" className="btn">
          Export Data
        </button>
      </Link>
      {
        allDocs.map((doc, key) => (
          <div key={key}>
            <div>
              {doc.title}
            </div>
            <div>
              {ReactHtmlParser(doc.content)}
            </div>
            <div>{doc.language_name}</div>
            <div>{doc.product_name}</div>
          </div>
        ))
          }

    </Container>
  );
};

export default AdminDocList;
