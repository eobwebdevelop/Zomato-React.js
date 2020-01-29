import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const AdminDocList = () => {
  const [allDocs, setAllDocs] = useState([]);
  const [reload, setReload] = useState(false);

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

  const deleteDocumentation = (id) => {
    console.log('id', id);
    fetch('http://localhost:3000/admin/doc/delete',
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
          window.location.reload();
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
        {allDocs.map((doc) => (
          <tr key={doc.id}>
            <td>{doc.id}</td>
            <td>{doc.title}</td>
            {/* <td>{ReactHtmlParser(doc.content)}</td> */}
            <td>
              {/* <Link to={`/Admin/AdminDocEditor/${doc.id}`} params={doc.id}> */}
              <button type="submit" className="view-quizzes-page-links-side-by-side">
                {' '}
                        Edit Documentation ►
                {' '}
              </button>
              {/* </Link> */}
            </td>
            <td>
              {/* <Link to={`/Admin/AdminProductEditor/${doc.id}`} params={doc.id}> */}
              {/* AS: does it need to be a link? same page,
                without deleted item should be displayed */}
              <button
                type="submit"
                // method="post"
                className="view-quizzes-page-links-side-by-side"
                onClick={() => deleteDocumentation(doc.id)}
              >
                {' '}
                        Delete Documentation ►
                {' '}
              </button>
              {/* </Link> */}
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

export default AdminDocList;
