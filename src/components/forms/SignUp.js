import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { firebaseLoginURL, firebaseSignUpURL } from "../store/constants";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);

  const submitDetails = async (e) => {
    console.log(e);
    try {
      const formItems = {
        email: e.email,
        password: e.password,
        returnSecureToken: true,
      };

      const setCredentails = await fetch(firebaseSignUpURL, {
        method: "POST",
        body: JSON.stringify(formItems),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await setCredentails.json();
      console.log(data.error);
      if (setCredentails.ok) {
        console.log("login successful");
        console.log(data);
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("email", data.email);
        navigate("/store");
      } else {
        console.log(data.error);
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "darkgrey",
        height: "100vh",
      }}
    >
      <form
        className="text-center p-4"
        style={{ background: "white", borderRadius: "8px" }}
        onSubmit={handleSubmit(submitDetails)}
      >
        <header className="mb-4">SignUp</header>
        <div className="mb-3">
          <label>Email Id</label>
          <input
            className="form-control"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword", {
              required: "confirm password is required",
              validate: (value) =>
                value !== password || "password do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-danger">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Sign Up
        </button>
        <Link to="/login">Login to your account</Link>
      </form>
    </div>
  );
};

export default SignUp;
