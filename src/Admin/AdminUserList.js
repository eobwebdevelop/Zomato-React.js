import React, { Component } from 'react';
import './AdminList.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminUserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  deleteUser = (id) => {
    fetch('http://localhost:3000/admin/user/delete',
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
          // return history.push('/doc_list');
        }
      });
  };

  render() {
    const { users } = this.props;
    return (
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
            <thead>
              <tr>
                <th>User id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>User Type</th>
                <th>Edit User</th>
                <th>Delete User</th>
              </tr>
            </thead>
            {users.map((user) => (
              <tbody key={user.id}>
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
                      {' '}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/user_delete/${user.id}`} params={user.id}>
                      <button type="submit" className="btn-list">
                          Delete User ►
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
export default AdminUserList;
