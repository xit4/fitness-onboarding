import React from "react";
import "./style.css";
import { Title, LabelButton } from "../../Typography";
import Input from "../../Input";
import Button from "../../Button";

const WizardInputStep = ({
  title = "",
  placeholder,
  value = "value",
  onInputChange = () => {},
  onConfirmation = () => {},
  inputType = "text",
  unit = "",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmation();
  };
  return (
    <form className="WizardInputStep" onSubmit={handleSubmit}>
      <div className="TitleWrapper">
        <Title>{title}</Title>
      </div>
      <Input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        unit={unit}
      />
      <Button onClick={onConfirmation} disabled={!value}>
        <LabelButton>Continue</LabelButton>
      </Button>
    </form>
  );
};

export default WizardInputStep;
