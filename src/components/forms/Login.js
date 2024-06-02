import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const submit = async () => {
    // try {
    //   const formItems = {
    //     // email: email.current.value,
    //     // password: password.current.value,
    //     returnSecureToken: true,
    //   };
    //   //   const setCredentails = await fetch(firebaseLoginURL, {
    //   //     method: "POST",
    //   //     body: JSON.stringify(formItems),
    //   //     headers: {
    //   //       "Content-Type": "application/json",
    //   //     },
    //   //   });
    //   //   const data = await setCredentails.json();
    //   if (setCredentails.ok) {
    //     console.log("login successful");
    //     console.log(data);
    //     localStorage.setItem("token", data.idToken);
    //     localStorage.setItem("email", data.email);
    //     setTimeout(() => {
    //       localStorage.clear();
    //       navigate("/login");
    //     }, 5000 * 5);
    //     navigate("/store");
    //   } else {
    //     throw new Error(data.error.message);
    //   }
    // } catch (error) {
    //   alert(error);
    // }
  };
};

export default Login;
