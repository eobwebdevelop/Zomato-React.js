import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminDocList = ({ documentation, onDelete, onDocEdit }) => (
  <>
    <Container>
      <h1>Documentation</h1>
      <hr />
      <Link to="/admin/doc_editor">
        <button type="submit" className="btn">
          Add New Documentation
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
                    onClick={() => onDocEdit(doc)}
                  >
                    Edit Documentation ►
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="submit"
                  className="view-quizzes-page-links-side-by-side"
                  onClick={() => { if (window.confirm('Are you sure you wish to delete this documentation?')) { onDelete(doc.id); } }}
                >
                  Delete Documentation ►
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  </>
);

AdminDocList.propTypes = {
  documentation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onDocEdit: PropTypes.func.isRequired,
};

export default AdminDocList;
