import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import RegionDropDown from "./RegionDropDown.js";

const Regions = [
  {
    key: "Greater Lisbon",
    text: "Greater Lisbon",
    value: "Greater Lisbon"
  },
  {
    key: "Porto",
    text: "Porto",
    value: "Porto"
  },
  {
    key: "Algarve",
    text: "Algarve",
    value: "Algarve"
  }
];

const UserType = [
  {
    key: "Restauranter",
    text: "Restauranter",
    value: "Restauranter"
  },
  {
    key: "Restauraunt Employee",
    text: "Restauraunt Employee",
    value: "Restauraunt Employee"
  },
  {
    key: "Zomato HQ Employee",
    text: "Zomato HQ Employee",
    value: "Zomato HQ Employee"
  }
];

const SignUp = () => {
  return (
    <div>
      <Container>
        <div class="formparentcontainer">
          <h1 id="h1-login"> Sign-Up </h1>
          <hr />
          <form class="signup-form">
            <h5>Personal Details:</h5>
            <input type="text" title="firstname" placeholder=" First Name*" />
            <input type="text" title="lastname" placeholder=" Last Name*" />
            <input type="text" title="email" placeholder=" Email*" />
            <br /> <br />
            <h5>Location:</h5>
            <RegionDropDown selectOptions={Regions} placeholder="Your region" />
            <br />
            <h5>Zomato Information:</h5>
            <RegionDropDown
              selectOptions={UserType}
              placeholder="Are you a... *"
            />
            <input
              type="text"
              title="email"
              placeholder=" Restaurant (If applicable)"
            />
            <br /> <br />
            <h5>Password:</h5>
            <input type="password" title="password" placeholder=" Password*" />
            <br />
            <input
              type="password"
              title="password"
              placeholder=" Confirm Password*"
            />
            <br />
            <Link to="/Learners/QuizList/QuizList">
              <button type="submit" class="btn-login">
                Sign-Up
              </button>
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default SignUp;
