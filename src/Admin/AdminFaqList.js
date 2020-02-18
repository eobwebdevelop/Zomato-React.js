import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminFaqList = ({ adminFaq, onEdit, onDelete }) => (
  <Container>
    <Link to="/admin/faq_editor">
      <button type="submit" className="btn">
        Add New Faq
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
        <th>Question</th>
        <th>Answer</th>
        <th>Language</th>
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      {adminFaq.map((el) => (
        <tbody key={el.id}>
          <td>{el.id}</td>
          <td>{el.faq_question}</td>
          <td>{el.content}</td>
          <td>{el.language_name}</td>
          <td>
            <Link to={`/admin/faq_editor/${el.id}`}>
              <button
                type="submit"
                className="view-quizzes-page-links-side-by-side"
                onClick={() => onEdit(el)}
              >
                Edit FAQ ►
              </button>
            </Link>
          </td>
          <td>
            <button
              type="submit"
              className="view-quizzes-page-links-side-by-side"
              onClick={() => onDelete(el.id)}
            >
              Delete FAQ ►
            </button>
          </td>
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
      faq_answer: PropTypes.string.isRequired,
      faq: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default AdminFaqList;
