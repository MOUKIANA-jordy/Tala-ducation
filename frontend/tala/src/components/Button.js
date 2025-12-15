import React from "react";

export default function Button({ text, onClick, color = "green" }) {
  const bgColor = color === "yellow" ? "#F7DC6F" : "#228B22"; // vert ou jaune
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        fontSize: "16px",
      }}
    >
      {text}
    </button>
  );
}
