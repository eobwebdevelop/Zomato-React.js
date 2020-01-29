import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {
  Link, withRouter, useHistory,
} from 'react-router-dom';

const AdminDocList = () => {
  const [docs, setDocs] = useState([]);
  const history = useHistory();

  const getDocs = () => {
    fetch(process.env.REACT_APP_PATH_ADMIN_DOC)
      .then((response) => response.json())
      .then((data) => {
        setDocs(data.Documentation);
      });
  };

  useEffect(() => {
    getDocs();
  }, []);

  const deleteDocumentation = (id) => {
    console.log('oi', process.env.REACT_APP_SERVER_URL);
    fetch(`${process.env.REACT_APP_SERVER_URL}/admin/doc/delete`,
      {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          id,
        }),
      })
      .then((res) => {
        res.json();
        if (res.status === 200) {
          setDocs(docs.filter((doc) => doc.id !== id));
        }
      });
  };

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

      <table className="tftable" border="1">
        <tr>
          <th>ID</th>
          <th>Title</th>
          {/* <th>Content</th> */}
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {docs.map((doc) => (
          <tr key={doc.id}>
            <td>{doc.id}</td>
            <td>{doc.title}</td>
            <td>
              <button type="submit" className="view-quizzes-page-links-side-by-side">
                {' '}
                        Edit Documentation ►
                {' '}
              </button>
            </td>
            <td>
              <button
                type="submit"
                // method="post"
                className="view-quizzes-page-links-side-by-side"
                onClick={() => deleteDocumentation(doc.id)}
              >
                  Delete Documentation ►
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

export default withRouter(AdminDocList);
