import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminDocList = ({ documentation, onDelete, onEdit }) => (
  <Container>
    <Link to="/admin/doc_editor">
      <button type="submit" className="btn">
        Add New Documentation
      </button>
    </Link>
    <Link to="/">
      <button type="submit" className="btn">
        Export Data
      </button>
    </Link>

    <table className="tftable" border="1">
      <thead>
        <th>ID</th>
        <th>Product</th>
        <th>Title</th>
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      {documentation.map((doc) => (
        <tbody key={doc.id}>
          <td>{doc.id}</td>
          <td>{doc.product_name}</td>
          <td>{doc.title}</td>
          <td>
            <button
              type="submit"
              className="view-quizzes-page-links-side-by-side"
              onClick={() => onEdit(doc.id)}

            >
              Edit Documentation ►
            </button>
          </td>
          <td>
            <button
              type="submit"
              className="view-quizzes-page-links-side-by-side"
              onClick={() => onDelete(doc.id)}
            >
              Delete Documentation ►
            </button>
          </td>
        </tbody>
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
