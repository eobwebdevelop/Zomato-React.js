import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const AdminDocList = ({ documentation, onDelete }) => (
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
              onClick={() => onDelete(doc.id)}
            >
                  Delete Documentation ►
            </button>
          </td>
        </tr>
      ))}
    </table>
  </Container>
);

AdminDocList.propTypes = {
  documentation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AdminDocList;
