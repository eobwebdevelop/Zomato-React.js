import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminEditUser = () => {
  return (
    <div>
      <Container>
        <h1>Edit User</h1>
        <hr />
        <p>You are editing %USERNAME.</p>
        <form>
          User Type:
          <input type="text" name="usertype"></input>
          <br />
          <br />
          First Name:
          <input type="text" name="firstname"></input>
          <br />
          <br />
          Last Name:
          <input type="text" name="lastname"></input>
          <br />
          <br />
          Region:
          <input type="text" name="region"></input>
          <br />
          <br />
          Phone Number:
          <input type="text" name="phonenumber"></input>
          <br />
          <br />
        </form>
        <Link to="/Admin/AdminUserList">
          <button type="submit" class="btn">
            Save
          </button>
        </Link>
      </Container>
    </div>
  );
};
export default AdminEditUser;
