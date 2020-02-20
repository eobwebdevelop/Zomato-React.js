import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminFaqList = ({ adminFaq, onEdit, onDelete }) => (
  <Container>
    <h1>Frequently Asked Questions</h1>
    <hr />
    <Link to="/admin/faq_editor">
      <button type="submit" className="btn">
        Add New Faq
      </button>
    </Link>

    <table className="tftable" border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Question</th>
          <th>Language</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {adminFaq.map((el) => (
        <tbody key={el.id}>
          <tr>
            <td>{el.id}</td>
            <td>{el.faq_question}</td>
            <td>{el.language_name}</td>
            <td>
              <Link to={`/admin/faq_editor/${el.id}`}>
                <button
                  type="submit"
                  className="view-quizzes-page-links-side-by-side btn-admin"
                  onClick={() => onEdit(el)}
                >
                  Edit FAQ ►
                </button>
              </Link>
            </td>
            <td>
              <button
                type="submit"
                className="view-quizzes-page-links-side-by-side btn-admin"
                onClick={() => { if (window.confirm('Are you sure you wish to delete this FAQ?')) { onDelete(el.id); } }}
              >
                Delete FAQ ►
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  </Container>
);

AdminFaqList.propTypes = {
  adminFaq: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      faq_question: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      language_id: PropTypes.number.isRequired,
      language_name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default AdminFaqList;
