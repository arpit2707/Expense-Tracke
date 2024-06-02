import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logout} className="btn btn-primary">
        Logout
      </button>
    </div>
  );
};

export default Header;
