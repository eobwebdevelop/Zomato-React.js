import React, { Component } from 'react';
import './AdminQuizList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminQuizList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes:[{id: 0, name: '',}],
    };
  }

  getQuizzes = () => {
    fetch('http://localhost:3000/admin/quiz')
      .then(response => response.json())
      .then(data => { console.log(data)
        this.setState( (state) => ({ 
          quizzes: data.quiz,
        }))
      })
  };

  componentDidMount(){
    this.getQuizzes();
    }

  render() {
      console.log(this.state.quizzes);
    return (
      <div>
        <Container>
          <h1>Manage Products</h1>
          <hr />
          <p>
          You are viewing all the available Products or Services at the current moment.
          </p>
          <Link to="/Admin/AdminProductCreator">
            <button type="submit" className="btn">
            Add Product
            </button>
          </Link>
          <Link to="/">
            <button type="submit" className="btn">
            Export Data
            </button>
          </Link>
          <table className="tftable" border="1">
            <tr>
              <th>Product id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Edit Product</th>
              <th>Delete Product</th>
            </tr>
             { this.state.quizzes.map((quiz) => {
                return (
            <tr>
                <td>{quiz.id}</td>
                <td>{quiz.name}</td>
                <td>
                    <a className="view-quizzes-page-links-side-by-side"
                  href="/Admin/AdminProductEditor" > Edit Product ► </a>
                  </td>
                 <td>
                        <a className="view-quizzes-page-links-side-by-side"
                  href="/Admin/AdminProductDelete" > Delete Product ► </a>
                  </td>
            </tr>
        )}
        )
        }
          </table>
        </Container>
      </div>
    );
  }
}
export default AdminQuizList;
