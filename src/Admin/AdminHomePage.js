import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminQuizList = () => (
  <div>
    <Container>
      <h1>Back Office Managers</h1>
      <hr />
      <Link to="/admin/quiz_list">
        <button type="submit" className="btn">
          Quiz
        </button>
      </Link>
      <Link to="/admin/doc_list">
        <button type="submit" className="btn">
          Documentation
        </button>
      </Link>
      <Link to="/admin/user_list">
        <button type="submit" className="btn">
          Users
        </button>
      </Link>
      <Link to="/admin/restaurant_list">
        <button type="submit" className="btn">
          Restaurants
        </button>
      </Link>
      <Link to="/admin/product_list">
        <button type="submit" className="btn">
          Products
        </button>
      </Link>
      <Link to="/admin/result_list">
        <button type="submit" className="btn">
          Results
        </button>
      </Link>
    </Container>
  </div>
);

export default AdminQuizList;
