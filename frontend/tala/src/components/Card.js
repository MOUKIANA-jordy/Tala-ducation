import React from "react";

export default function Card({ title, children }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px 0",
      backgroundColor: "#fff",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ color: "#228B22" }}>{title}</h2>
      {children}
    </div>
  );
}
