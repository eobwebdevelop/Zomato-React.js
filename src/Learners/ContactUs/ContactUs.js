import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div>
      <div class="loginparentcontainer">
        <Container>
          <h1>Contact Us</h1>
          <hr></hr>
          <h2>We would love to hear from you</h2>
          <form>
            <input type="text" title="name" placeholder="Name*" />
            <br />
            <input type="text" title="email" placeholder="Email*" />
            <br />
            <input
              type="text"
              title="name"
              placeholder="Phone number (optional)"
            />
            <br />
            <input type="text" title="email" placeholder="Message*" />
            <br />
            <Link to="/Learners/QuizList/QuizList">
              <button type="submit" class="btn-login">
                Send Message
              </button>
            </Link>
            <br />
          </form>
        </Container>
      </div>
    </div>
  );
};
export default ContactUs;
