import React from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const AdminUserList = ({ users, onDelete }) => (
  <div>
    <Container>
      <h1>Manage Users</h1>
      <hr />
      <p>
          You are viewing all the available Users at the current moment.
      </p>
      <Link to="/learners/signup">
        <button type="submit" className="btn">
            Add Users
        </button>
      </Link>
      <Link to="/">
        <button type="submit" className="btn">
            Export Data
        </button>
      </Link>
      <table className="tftable" border="1">
        <tr>
          <th>User id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>User Type</th>
          <th>Edit User</th>
          <th>Delete User</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>
              {user.first_name}
                  ,
              {' '}
              {user.last_name}
            </td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
            <td>{user.user_type_id}</td>
            <td>
              <Link to={`/admin/user_editor/${user.id}`} params={user.id}>
                <button type="submit" className="btn-list">
                        Edit User ►
                </button>
              </Link>
            </td>
            <td>
              <button
                type="submit"
                className="btn-list"
                onClick={() => onDelete(user.id)}
              >
                        Delete User ►
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  </div>
);

AdminUserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      user_type_id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default AdminUserList;
