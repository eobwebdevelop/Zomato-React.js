import React from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const AdminRestaurantList = ({ restaurants, onDelete }) => (
  <div>
    <Container>
      <h1>Manage Restaurants</h1>
      <hr />
      <p>
          You are viewing all the available restaurants at the current moment.
      </p>
      <Link to="/learners/signUp">
        <button type="submit" className="btn">
            Add Restaurants
        </button>
      </Link>
      <Link to="/">
        <button type="submit" className="btn">
            Export Data
        </button>
      </Link>
      <table className="tftable" border="1">
        <tr>
          <th>Restaurant id</th>
          <th>Name</th>
          <th>Region</th>
          <th>Edit Restaurant</th>
          <th>Delete Restaurant</th>
        </tr>
        {restaurants.map((res) => (
          <tr>
            <td>{res.id}</td>
            <td>
              {res.name}
            </td>
            <td>{res.region}</td>
            <td>
              <Link to={`/admin/restaurant_delete/${res.id}`} params={res.id}>
                <button type="submit" className="btn-list">
                        Edit Restaurant ►
                </button>
                {' '}
              </Link>
            </td>
            <td>
              <button
                type="submit"
                className="btn-list"
                onClick={() => onDelete(res.id)}
              >
                        Delete Restaurant ►
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  </div>
);

AdminRestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      region: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AdminRestaurantList;
