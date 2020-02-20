import React from "react";
import { Container } from "react-bootstrap";

const AdminExportData = props => (
  <div>
    <Container>
      <h1>Export Data</h1>
      <hr></hr>
      <p>Follow these download links to export the following as csv:</p>

      <ul>
        <li>
          <a href="http://localhost:3000/admin/export/quizzes">Quizzes</a>
        </li>
        <li>
          <a href="http://localhost:3000/admin/export/documentation">
            Documentation
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/admin/export/users">Users</a>
        </li>
        <li>
          <a href="http://localhost:3000/admin/export/restaurants">
            Restaurants
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/admin/export/products">Products</a>
        </li>
        <li>
          <a href="http://localhost:3000/admin/export/results">Results</a>
        </li>
        <li>
          <a href="http://localhost:3000/admin/export/faqs">FAQs</a>
        </li>
      </ul>
    </Container>
  </div>
);

export default AdminExportData;
