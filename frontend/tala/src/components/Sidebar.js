import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <h1 className="logo">Tala</h1>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profil</Link>
        <Link to="/users">Utilisateurs</Link>
      </nav>

      <button className="logout-btn" onClick={logout}>
        Déconnexion
      </button>
    </aside>
  );
};

export default Sidebar;
