import React, { useState } from "react";
import "./style.css";
import ProgressDots from "./ProgressDots";
import Input from "../Input";
import WizardStep from "./WizardStep";
import Tile from "../Tile";

const Wizard = () => {
  const [fullname, setFullname] = useState("");
  const [weight, setWeight] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="Wizard">
      <ProgressDots numberOfSteps={3} currentStep={currentStep} />
      {currentStep === 0 && (
        <WizardStep
          title="Hi there, how should we call you?"
          onConfirmation={() => setCurrentStep(1)}
          disabled={!fullname}
        >
          <Input
            placeholder="Your name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </WizardStep>
      )}
      {currentStep === 1 && (
        <WizardStep
          title={`What's your weight, ${fullname}?`}
          onConfirmation={() => setCurrentStep(2)}
          disabled={!weight}
        >
          <Input
            type="number"
            placeholder="Your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            unit="Kg"
          />
        </WizardStep>
      )}
      {currentStep === 2 && (
        <WizardStep title={`What's your preferred workout?`} disabled={!weight}>
          <Tile />
          <Tile selected color={Tile.color.yellow} />
          <Tile color={Tile.color.red} />
          <Tile color={Tile.color.black} />
        </WizardStep>
      )}
    </div>
  );
};

export default Wizard;
