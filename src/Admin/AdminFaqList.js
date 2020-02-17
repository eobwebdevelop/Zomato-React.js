import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminFaqList = ({ adminFaq, onDelete }) => (
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
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      {adminFaq.map((el) => (
        <tbody key={el.id}>
          <td>{el.id}</td>
          <td>{el.faq_question}</td>
          <td>{el.content}</td>
          <td>
            <button
              type="submit"
              className="view-quizzes-page-links-side-by-side"
            >
              Edit FAQ ►
            </button>
          </td>
          <td>
            <button
              type="submit"
              className="view-quizzes-page-links-side-by-side"
              onClick={() => onDelete(adminFaq.id)}
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
};

export default AdminFaqList;
