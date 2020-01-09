import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminUserConfig = () => {
  return (
    <div>
      <Container>
        <h1>Manage Users</h1>
        <p>You are viewing a list of users.</p>
        <Link to="/Admin/AdminQuizMaker">
          <button type="submit" class="btn">
            Add User
          </button>
        </Link>
        <br />
        <Link to="/">
          <button type="submit" class="btn">
            Export Data
          </button>
        </Link>

        <table class="tftable" border="1">
          <tr>
            <th>User Type</th>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Region</th>
            <th>Phone Number</th>
            <th>Edit User?</th>
            <th>Delete User?</th>
          </tr>
          <tr>
            <td>Restauranter</td>
            <td>1</td>
            <td>Britney</td>
            <td>Spears</td>
            <td>britney@hotmail.com</td>
            <td>Lisbon</td>
            <td>919192828</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit User ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Delete User ►
              </a>
            </td>
          </tr>

          <tr>
            <td>Restauranter</td>
            <td>1</td>
            <td>Britney</td>
            <td>Spears</td>
            <td>britney@hotmail.com</td>
            <td>Lisbon</td>
            <td>919192828</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit User ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Delete User ►
              </a>
            </td>
          </tr>
          <tr>
            <td>Restauranter</td>
            <td>1</td>
            <td>Britney</td>
            <td>Spears</td>
            <td>britney@hotmail.com</td>
            <td>Lisbon</td>
            <td>919192828</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit User ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Delete User ►
              </a>
            </td>
          </tr>
          <tr>
            <td>Restauranter</td>
            <td>1</td>
            <td>Britney</td>
            <td>Spears</td>
            <td>britney@hotmail.com</td>
            <td>Lisbon</td>
            <td>919192828</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit User ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Delete User ►
              </a>
            </td>
          </tr>
          <tr>
            <td>Restauranter</td>
            <td>1</td>
            <td>Britney</td>
            <td>Spears</td>
            <td>britney@hotmail.com</td>
            <td>Lisbon</td>
            <td>919192828</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit User ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Delete User ►
              </a>
            </td>
          </tr>
        </table>
        <br />
      </Container>
    </div>
  );
};
export default AdminUserConfig;
