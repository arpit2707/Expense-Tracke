import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { firebaseLoginURL } from "../store/constants";

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const submit = async (datas) => {
    try {
      const formItems = {
        email: datas.email,
        password: datas.password,
        returnSecureToken: true,
      };
      const setCredentails = await fetch(firebaseLoginURL, {
        method: "POST",
        body: JSON.stringify(formItems),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await setCredentails.json();
      if (setCredentails.ok) {
        console.log("login successful");
        console.log(data);
        localStorage.setItem("token", data.idToken);
        localStorage.setItem("email", data.email);
        setTimeout(() => {
          localStorage.clear();
          navigate("/login");
        }, 50000 * 5);
        navigate("/welcome");
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{
        backgroundColor: "darkgrey",
        height: "100vh",
      }}
    >
      <form
        className="text-center p-4 bg-dark text-white border-2 border-solid border-rounded "
        onSubmit={handleSubmit(submit)}
      >
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>This field is required</p>}
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            className="form-control"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <p>This field is required</p>}
        </div>
        <div className="d-flex flex-column ">
          <button className="btn btn-primary">Login</button>
          <Link to="/signup">Forgot Password</Link>
          <Link to="/signup">Don't have an account? Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
