import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './AdminDocEditor.css';


class AdminAppLogin extends Component {
  render() {
    return (
      <Container>
        <div className="formparentcontainer">
          <div className="formchildcontainer">
            <h1 id="h1-login">Quiz - Admin Login</h1>
            <hr />
            <form>
              <input type="text" title="username" placeholder=" Username" />
              <br />
              <input type="password" title="username" placeholder=" Password" />
              <br />
              <Link to="/Admin/AdminQuizList">
                <button type="submit" className="btn-login">
                  Login
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default AdminAppLogin;
