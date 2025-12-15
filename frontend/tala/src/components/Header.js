import React from "react";
import "../styles/Dashboard.css";

const Header = ({ user }) => {
  return (
    <header className="dashboard-header">
      <h2>Bienvenue {user?.name || "Utilisateur"}</h2>
    </header>
  );
};

export default Header;
