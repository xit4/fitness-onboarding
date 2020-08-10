import React from "react";
import "./style.css";
import { Title, LabelButton } from "../../Typography";
import Button from "../../Button";

const WizardStep = ({
  title = "",
  disabled = false,
  onConfirmation = () => {},
  children,
  confirmationLabel = "Continue",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmation();
  };
  return (
    <form className="WizardStep" onSubmit={handleSubmit}>
      <div className="TitleWrapper">
        <Title>{title}</Title>
      </div>
      {children}
      <Button onClick={onConfirmation} disabled={disabled}>
        <LabelButton>{confirmationLabel}</LabelButton>
      </Button>
    </form>
  );
};

export default WizardStep;
