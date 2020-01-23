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

      <table className="tftable" border="1">
        <tr>
          <th>Quiz ID</th>
          <th>Quiz Name</th>
          <th>Staff Type</th>
          <th>Product</th>
          <th>Language</th>
          <th>Edit Quiz?</th>
          <th>Edit Documentation?</th>
          <th>Delete Quiz?</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Zomato Gold - Introduction</td>
          <td>Restauranters</td>
          <td>Zomato Gold</td>
          <td>English</td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminQuizMaker"
            >
                Edit Quiz ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminDocEditor"
            >
                Edit Documentation ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminQuizList"
            >
                Delete Quiz ►
            </a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Zomato Gold - Introduction</td>
          <td>Restauranters</td>
          <td>Zomato Gold</td>
          <td>English</td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminQuizMaker"
            >
                Edit Quiz ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminDocEditor"
            >
                Edit Documentation ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminQuizList"
            >
                Delete Quiz ►
            </a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Zomato Gold - Introduction</td>
          <td>Restauranters</td>
          <td>Zomato Gold</td>
          <td>English</td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminQuizMaker"
            >
                Edit Quiz ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminDocEditor"
            >
                Edit Documentation ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminQuizList"
            >
                Delete Quiz ►
            </a>
          </td>
        </tr>
      </table>
    </Container>
  </div>
);
export default AdminQuizList;
