import logo from "./logo.svg";
import { Fragment, Suspense, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";
import Welcome from "./components/Welcome";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>} />
      <Router>
        <Routes>
          <Route path="/" element={isLogin ? <Home /> : <SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
