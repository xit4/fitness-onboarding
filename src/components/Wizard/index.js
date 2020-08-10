import React from "react";
import "./style.css";
import ProgressDots from "./ProgressDots";
import { useLocation } from "react-router-dom";
import steps from "../../constants/steps";

const Wizard = ({ children }) => {
  const location = useLocation();
  return (
    <div className="Wizard">
      <ProgressDots
        numberOfSteps={steps.length}
        currentStep={steps.indexOf(location.pathname)}
      />
      {children}
    </div>
  );
};

export default Wizard;
