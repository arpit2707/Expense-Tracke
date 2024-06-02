import React, { useRef } from "react";
import axios from "axios";
import { firebaseUpdateURL, API_KEY } from "../store/constants";
const Update = () => {
  const name = useRef(null);
  const profileurl = useRef(null);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const updated = await axios.post(firebaseUpdateURL, {
        idToken: localStorage.getItem("token"),
        displayName: name.current.value,
        photoUrl: profileurl.current.value,
        returnSecureToken: true,
      });
      console.log(updated);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <form onSubmit={submit}>
        <header>Complete Details</header>
        <div className="d-flex flex-column mb-3">
          <label>Full Name:</label>
          <input placeholder="fullname" ref={name} />
        </div>
        <div className="d-flex flex-column mb-3">
          <label>Profile Photo URL:</label>
          <input placeholder="profilepic" ref={profileurl} />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};
export default Update;
