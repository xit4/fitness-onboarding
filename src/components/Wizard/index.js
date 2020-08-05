import React from "react";
import "./style.css";
import WizardStep from "./WizardStep";
import ProgressDots from "./ProgressDots";

const Wizard = () => {
  return (
    <div className="Wizard">
      <ProgressDots numberOfSteps={3} currentStep={1} />
      <WizardStep title="Hi there, how should we call you?" />
    </div>
  );
};

export default Wizard;
