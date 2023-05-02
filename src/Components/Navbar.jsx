import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../feature/user/userSlice";
import axios from "axios";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(login({ isLoggedIn: false, username: "" }));
    navigate("/login");
    try {
      const config = {
        crossDomain: true,
        withCredentials: true,
      };
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        config,
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="nav-container">
      <Link to="/">Home</Link>
      {user.isLoggedIn ? (
        <a href="/logout" onClick={(e) => handleLogout(e)}>
          Logout
        </a>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

export default Navbar;
