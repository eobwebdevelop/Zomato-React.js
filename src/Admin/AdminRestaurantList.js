import React, { Component } from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminRestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Container>
          <h1>Manage Restaurants</h1>
          <hr />
          <p>
          You are viewing all the available restaurants at the current moment.
          </p>
          <Link to="/Learners/SignUp">
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
            <thead>
              <tr>
                <th>Restaurant id</th>
                <th>Name</th>
                <th>Region</th>
                <th>Edit Restaurant</th>
                <th>Delete Restaurant</th>
              </tr>
            </thead>
            {restaurants.map((res) => (
              <tbody key={res.id}>
                <tr>
                  <td>{res.id}</td>
                  <td>
                    {res.name}
                  </td>
                  <td>{res.region}</td>
                  <td>
                    <Link to={`/Admin/AdminRestaurantEditor/${res.id}`}>
                      <button type="submit" className="btn-list">
                        Edit Restaurant ►
                      </button>
                      {' '}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/Admin/AdminRestaurantDelete/${res.id}`}>
                      <button type="submit" className="btn-list">
                        Delete Restaurant ►
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
export default AdminRestaurantList;
