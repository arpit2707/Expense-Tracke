import logo from "./logo.svg";
import { Fragment, Suspense, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";
import Welcome from "./components/Welcome";
import Update from "./components/forms/Update";
import Header from "./components/home/Header";
import Password from "./components/password/Password";
import ExpenseForm from "./components/expenses/expenseform";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Router>
      <Fragment>
        <Header />
        <Suspense fallback={<div>Loading...</div>} />

        <Routes>
          <Route path="/" element={isLogin ? <Home /> : <SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/update" element={<Update />} />
          <Route path="/forgot" element={<Password />} />
          <Route path="/expensef" element={<ExpenseForm />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
