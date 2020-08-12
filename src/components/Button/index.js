import React from "react";
import "./style.css";
import debounce from "../../utils/debounce";

const Button = ({
  onClick = () => {},
  disabled = false,
  children,
  type = "button",
}) => {
  const handleOnClick = debounce(onClick, 200);
  return (
    <button
      type={type}
      className="Button"
      disabled={disabled}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
