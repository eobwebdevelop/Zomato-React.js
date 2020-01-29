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

  deleteRestaurant = (id) => {
    fetch('http://localhost:3000/admin/restaurant/delete',
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
          // return history.push('/Admin/AdminRestaurantList');
        }
      });
  };

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
                  <Link to={`/Admin/AdminRestaurantDelete/${res.id}`} params={res.id}>
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
                    onClick={() => this.deleteRestaurant(res.id)}
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
  }
}
export default AdminRestaurantList;
