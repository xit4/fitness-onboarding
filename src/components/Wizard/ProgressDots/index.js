import React from "react";
import "./style.css";
import Dot from "./Dot";

const ProgressDots = ({ numberOfSteps = 1, currentStep = 0 }) => {
  return (
    <div className="ProgressDots">
      {Array(numberOfSteps)
        .fill(null)
        .map((_, i) => (
          <Dot key={`dot#${i}`} active={i <= currentStep} />
        ))}
    </div>
  );
};

export default ProgressDots;
