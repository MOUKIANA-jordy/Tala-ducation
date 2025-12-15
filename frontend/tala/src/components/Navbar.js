import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#228B22", // vert principal
      color: "white"
    }}>
      <h1>Tala</h1>
      <div>
        <Link to="/login" style={{ marginRight: "15px", color: "white" }}>Login</Link>
        <Link to="/register" style={{ color: "white" }}>Register</Link>
      </div>
    </nav>
  );
}
