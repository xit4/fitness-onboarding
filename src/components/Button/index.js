import React from "react";
import "./style.css";

const Button = ({
  onClick = () => {},
  disabled = false,
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="Button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
