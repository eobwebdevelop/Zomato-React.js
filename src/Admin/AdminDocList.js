import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminDocList = ({
  documentation, onDelete, onEdit, clearSelectedDoc,
}) => (
  <Container>
    <Link to="/admin/doc_editor">
      <button
        type="submit"
        className="btn"
        onClick={() => clearSelectedDoc()}
      >
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
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {documentation.map((doc) => (
        <tbody key={doc.id}>
          <tr>
            <td>{doc.id}</td>
            <td>{doc.product_name}</td>
            <td>{doc.title}</td>
            <td>
              <Link to={`/admin/doc_editor/${doc.id}`}>
                <button
                  type="submit"
                  className="view-quizzes-page-links-side-by-side"
                  onClick={() => onEdit(doc)}
                >
                  Edit Documentation ►
                </button>
              </Link>
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
          </tr>
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
  onEdit: PropTypes.func.isRequired,
  clearSelectedDoc: PropTypes.func.isRequired,
};

export default AdminDocList;
