import React from 'react';
import './AdminHomePage.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminQuizList = () => (
  <div>
    <Container>
      <h1>Back Office Managers</h1>
      <hr />
      <Link to="/Admin/AdminQuizList">
        <button type="submit" className="btn">
          Quiz
        </button>
      </Link>
      <Link to="/Admin/AdminDocList">
        <button type="submit" className="btn">
          Documentation
        </button>
      </Link>
      <Link to="/Admin/AdminUserList">
        <button type="submit" className="btn">
           Users
        </button>
      </Link>
      <Link to="/Admin/AdminRestaurantList">
        <button type="submit" className="btn">
            Restaurants
        </button>
      </Link>
      <Link to="/Admin/AdminProductList">
        <button type="submit" className="btn">
           Products
        </button>
      </Link>
      <Link to="/Admin/AdminResultList">
        <button type="submit" className="btn">
           Results
        </button>
      </Link>
    </Container>
  </div>
);

export default AdminQuizList;
