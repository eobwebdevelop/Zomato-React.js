import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDocList = () => (
  <div>
    <Container>
      <h1>Manage Documentation</h1>
      <hr />
      <p>
          You are viewing a list of documentation available to edit or add
          documentation to.
      </p>
      <Link to="/Admin/AdminDocEditor">
        <button type="submit" className="btn">
            Add Documentation
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
          <th>Name</th>
          <th>Staff(?) Type</th>
          <th>Product</th>
          <th>Language</th>
          <th>Edit Documentation?</th>
          <th>Delete</th>
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
              href="/Admin/AdminDocEditor"
            >
                Edit Documentation ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminDocList"
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
              href="/Admin/AdminDocEditor"
            >
                Edit Documentation ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminDocList"
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
              href="/Admin/AdminDocEditor"
            >
                Edit Documentation ►
            </a>
          </td>
          <td>
            <a
              className="view-quizzes-page-links-side-by-side"
              href="/Admin/AdminDocList"
            >
                Delete Quiz ►
            </a>
          </td>
        </tr>
      </table>
    </Container>
  </div>
);
export default AdminDocList;
