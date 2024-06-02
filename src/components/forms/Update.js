import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import {
  firebaseUpdateURL,
  API_KEY,
  firebaseProfileURL,
} from "../store/constants";
const Update = () => {
  let name = useRef(null);
  let profileurl = useRef(null);
  const [pname, setPname] = useState("");
  const [purl, setPurl] = useState("");
  const fetchProfile = async () => {
    try {
      const profile = await axios.post(firebaseProfileURL, {
        idToken: localStorage.getItem("token"),
      });
      console.log(profile);
      setPname(profile?.data?.users[0]?.displayName);
      setPurl(profile?.data?.users[0]?.photoUrl);
      name.current.value = profile?.data?.users[0]?.displayName;
      profileurl.current.value = profile?.data?.users[0]?.photoUrl;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);
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
          <input
            placeholder="fullname"
            ref={name}
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column mb-3">
          <label>Profile Photo URL:</label>
          <input
            placeholder="profilepic"
            ref={profileurl}
            value={purl}
            onChange={(e) => setPurl(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};
export default Update;
