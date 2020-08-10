import React from "react";
import "./style.css";
import Dot from "./Dot";
import { useNavigate } from "react-router-dom";
import steps from "../../../constants/steps";

const ProgressDots = ({ numberOfSteps = 1, currentStep = 0 }) => {
  const navigate = useNavigate();
  return (
    <div className="ProgressDots">
      {Array(numberOfSteps)
        .fill(null)
        .map((_, i) => {
          const isDotActive = i <= currentStep;
          return (
            <Dot
              key={`dot#${i}`}
              active={isDotActive}
              onClick={() => {
                if (isDotActive && i !== currentStep) navigate(steps[i]);
              }}
            />
          );
        })}
    </div>
  );
};

export default ProgressDots;
