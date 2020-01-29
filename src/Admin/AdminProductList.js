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

  deleteProduct = (id) => {
    fetch('http://localhost:3000/admin/product/delete',
      {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          id,
        }),
      })
      .then((res) => {
        res.json();
        if (res.status === 200) {
          console.log('hey');
          return this.props.history.push('/admin/admin_product_list');
        }
      });
  };

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
          <Link to="/admin/admin_product_creator">
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
            <thead>
              <tr>
                <th>Product id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Edit Product</th>
                <th>Delete Product</th>
              </tr>
            </thead>
            { products.map((prod) => (
              <tbody key={prod.id}>
                <tr>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td>{prod.description}</td>
                  <td>
                    <Link to={`/admin/product_editor/${prod.id}`}>
                      <button type="submit" className="btn-list">
                          Edit Product ►
                      </button>
                      {' '}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/delete_editor/${prod.id}`}>
                      <button type="submit" className="btn-list">
                          Delete Product ►
                      </button>
                      {' '}

                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}

          </table>
        </Container>
      </div>
    );
  }
}
export default AdminProductList;
