import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminEditUser = () => (
  <div>
    <Container>
      <h1>Edit User</h1>
      <hr />
      <p>You are editing %USERNAME.</p>
      <form>
          User Type:
        <input type="text" name="usertype" />
        <br />
        <br />
          First Name:
        <input type="text" name="firstname" />
        <br />
        <br />
          Last Name:
        <input type="text" name="lastname" />
        <br />
        <br />
          Region:
        <input type="text" name="region" />
        <br />
        <br />
          Phone Number:
        <input type="text" name="phonenumber" />
        <br />
        <br />
      </form>
      <Link to="/Admin/AdminUserConfig">
        <button type="submit" className="btn">
            Save
        </button>
      </Link>
    </Container>
  </div>
);
export default AdminEditUser;
