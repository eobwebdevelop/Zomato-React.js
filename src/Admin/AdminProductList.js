import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AdminProductList = ({ products, onDelete }) => (
  <div>
    <Container>
      <h1>Manage Products</h1>
      <hr />
      <p>
        You are viewing all the available Products or Services at the current
        moment.
      </p>
      <Link to="/admin/product_creator">
        <button type="submit" className="btn">
          Add Product
        </button>
      </Link>

      <table className="tftable" border="1">
        <thead>
          <tr>
            <th>Product id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Edit Product</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        {products.map(prod => (
          <tbody key={prod.id}>
            <tr>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{prod.language_id}</td>
              <td>
                <Link to={`/admin/product_editor/${prod.id}`}>
                  <button type="submit" className="btn-list">
                    Edit Product ►
                  </button>{" "}
                </Link>
              </td>
              <td>
                <button
                  type="submit"
                  className="btn-list"
                  onClick={() => onDelete(prod.id)}
                >
                  Delete Product ►
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  </div>
);

AdminProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default AdminProductList;
