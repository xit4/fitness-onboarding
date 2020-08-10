import React from "react";
import "./style.css";
import { LabelInput } from "../Typography";
import cn from "../../utils/classnames";

const Input = ({
  placeholder = "",
  value = "",
  onChange = () => {},
  unit = "",
  type = "text",
}) => {
  const className = cn("Input", { filled: !!value, unit: !!unit });
  const wrapperClassName = cn("InputWrapper", { filled: !!value });
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
