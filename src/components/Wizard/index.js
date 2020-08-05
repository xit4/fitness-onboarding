import React, { useState } from "react";
import "./style.css";
import WizardInputStep from "./WizardInputStep";
import ProgressDots from "./ProgressDots";

const Wizard = () => {
  const [fullname, setFullname] = useState("");
  const [weight, setWeight] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="Wizard">
      <ProgressDots numberOfSteps={3} currentStep={currentStep} />
      {currentStep === 0 && (
        <WizardInputStep
          title="Hi there, how should we call you?"
          placeholder="Your name"
          value={fullname}
          onInputChange={(e) => setFullname(e.target.value)}
          onConfirmation={() => setCurrentStep(1)}
        />
      )}
      {currentStep === 1 && (
        <WizardInputStep
          title={`What's your weight, ${fullname}?`}
          placeholder="Your weight"
          value={weight}
          onInputChange={(e) => setWeight(e.target.value)}
          onConfirmation={() => setCurrentStep(1)}
        />
      )}
    </div>
  );
};

export default Wizard;
