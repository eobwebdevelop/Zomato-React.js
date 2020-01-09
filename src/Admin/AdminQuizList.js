import React from "react";
import "./AdminQuizList.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminQuizList = () => {
  return (
    <div>
      <Container>
        <h1>Manage Quizzes</h1>
        <p>
          You are viewing a list of quizzes available to edit or add
          documentation to.
        </p>
        <Link to="/Admin/AdminQuizMaker">
          <button type="submit" class="btn">
            Add Quiz
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
            <th>Quiz ID</th>
            <th>Quiz Name</th>
            <th>Staff Type</th>
            <th>Package</th>
            <th>Language</th>
            <th>Edit Quiz?</th>
            <th>Edit Documentation?</th>
          </tr>
          <tr>
            <td>0</td>
            <td>Zomato Gold - Introduction</td>
            <td>Restauranters</td>
            <td>Zomato Gold</td>
            <td>English</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
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
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Zomato Gold - Introduction</td>
            <td>Restauranters</td>
            <td>Zomato Gold</td>
            <td>Portuguese</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Zomato Gold - Introduction</td>
            <td>Restauranters</td>
            <td>Zomato Gold</td>
            <td>English</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Zomato Gold - Introduction</td>
            <td>Restauranters</td>
            <td>Zomato Gold</td>
            <td>English</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Zomato Gold - Introduction</td>
            <td>Restauranters</td>
            <td>Zomato Gold</td>
            <td>English</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
              </a>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Zomato Gold - Introduction</td>
            <td>Restauranters</td>
            <td>Zomato Gold</td>
            <td>English</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
              </a>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Zomato Gold - Introduction</td>
            <td>Restauranters</td>
            <td>Zomato Gold</td>
            <td>English</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
              </a>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Zomato Gold - Introduction</td>
            <td>Restauranters</td>
            <td>Zomato Gold</td>
            <td>English</td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Quiz ►
              </a>
            </td>
            <td>
              <a
                class="view-quizzes-page-links-side-by-side"
                href="/Learners/Quiz/Quiz"
              >
                Edit Documentation ►
              </a>
            </td>
          </tr>
        </table>
      </Container>
    </div>
  );
};
export default AdminQuizList;
