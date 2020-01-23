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
      <div>
        {
        allDocs.map((doc, key) => (
          <div key={key}>
            <h1>
              {doc.title}
            </h1>
            <div>
              {ReactHtmlParser(doc.content)}
            </div>
            <h5>{doc.language_name}</h5>
            <h5>{doc.product_name}</h5>
          </div>
        ))
          }
      </div>
    </Container>
  );
};

export default AdminDocList;
