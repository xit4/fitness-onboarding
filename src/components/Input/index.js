import React from "react";
import "./style.css";
import { LabelInput } from "../Typography";

const Input = ({
  placeholder = "",
  value = "",
  onChange = () => {},
  unit = "",
  type = "text",
}) => {
  const className = `Input ${!!value ? "filled" : ""} ${!!unit ? "unit" : ""}`;
  const wrapperClassName = `InputWrapper ${!!value ? "filled" : ""}`;
  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={50}
      ></input>
      {!!unit && <LabelInput>{unit}</LabelInput>}
    </div>
  );
};

export default Input;
