import React, { Component } from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { products } = this.props;
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
            { products.map((prod) => (
              <tr>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.description}</td>
                <td>
                  <a
                    className="view-quizzes-page-links-side-by-side"
                    href={`/Admin/AdminProductEditor/${prod.id}`}
                  >
                    {' '}
                        Edit Product ►
                    {' '}
                  </a>
                </td>
                <td>
                  <a
                    className="view-quizzes-page-links-side-by-side"
                    href={`/Admin/AdminProductDelete/${prod.id}`}
                  >
                    {' '}
                        Delete Product ►
                    {' '}
                  </a>
                </td>
              </tr>
            ))}

          </table>
        </Container>
      </div>
    );
  }
}
export default AdminProductList;
