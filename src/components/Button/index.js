import React from "react";
import "./style.css";

const Button = ({ onClick = () => {}, disabled = false, children }) => {
  return (
    <button className="Button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
