import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <header>Welcome to home screen</header>
      <p>
        Your Profile is incomplete <Link to="/update">Complete Now</Link>
      </p>
    </div>
  );
};
export default Welcome;
