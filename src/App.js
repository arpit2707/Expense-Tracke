import logo from "./logo.svg";
import { Fragment, Suspense, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>} />
      <Router>
        <Routes>
          <Route path="/" element={isLogin ? <Home /> : <SignUp />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
