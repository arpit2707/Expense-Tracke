import React from "react";
import { Link } from "react-router-dom";
import { firebaseEmailVerifyURL } from "./store/constants";
import axios from "axios";

const Welcome = () => {
  const verify = async () => {
    const vrification = await axios.post(firebaseEmailVerifyURL, {
      requestType: "VERIFY_EMAIL",
      idToken: localStorage.getItem("token"),
    });
    console.log(vrification);
  };
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <header>Welcome to home screen</header>
      <Link to="/update">Profile</Link>
      <button className="btn btn-primary" onClick={verify}>
        Verify Email
      </button>
    </div>
  );
};
export default Welcome;
