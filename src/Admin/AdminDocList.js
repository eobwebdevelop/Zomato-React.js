import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class AdminDocList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // deleteDocumentation = (id) => {
  //     console.log('oi', process.env.REACT_APP_SERVER_URL);
  //     fetch(`${process.env.REACT_APP_SERVER_URL}/admin/doc/delete`,
  //       {
  //         method: 'DELETE',
  //         headers: new Headers({
  //           'Content-Type': 'application/json',
  //         }),
  //         body: JSON.stringify({
  //           id,
  //         }),
  //       })
  //       .then((res) => {
  //         res.json();
  //         if (res.status === 200) {
  //           setdocumentation(documentation.filter((doc) => doc.id !== id));
  //         }
  //       });
  //   };

  render() {
    const { documentation } = this.props;
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {documentation.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.title}</td>
              <td>
                <button type="submit" className="view-quizzes-page-links-side-by-side">
                  Edit Documentation ►
                </button>
              </td>
              <td>
                <button
                  type="submit"
                // method="post"
                  className="view-quizzes-page-links-side-by-side"
                  // onClick={() => deleteDocumentation(doc.id)}
                >
                  Delete Documentation ►
                </button>
              </td>
            </tr>
          ))}
        </table>
      </Container>
    );
  }
}

AdminDocList.propTypes = {
  documentation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default AdminDocList;
