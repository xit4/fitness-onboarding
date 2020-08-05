import React from "react";
import "./style.css";
import { Title, LabelButton } from "../../Typography";

const WizardInputStep = ({
  title = "",
  placeholder,
  value = "value",
  onInputChange = () => {},
  onConfirmation = () => {},
}) => {
  return (
    <div className="WizardInputStep">
      <div className="TitleWrapper">
        <Title>{title}</Title>
      </div>
      <input placeholder={placeholder} value={value} onChange={onInputChange} />
      <button onClick={onConfirmation}>
        <LabelButton>Continue</LabelButton>
      </button>
    </div>
  );
};

export default WizardInputStep;
