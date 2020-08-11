import React from "react";
import "./style.css";
import Dot from "./Dot";
import { useHistory } from "react-router-dom";
import steps from "../../../constants/steps";
import { LabelBack } from "../../Typography";

const ProgressDots = ({ numberOfSteps = 1, currentStep = 0 }) => {
  const history = useHistory();
  const showBackButton = currentStep > 0;
  return (
    <div className="ProgressDots">
      {showBackButton && (
        <LabelBack
          onClick={() =>
            history.push({
              pathname: steps[currentStep - 1],
              state: { backward: true },
            })
          }
        >
          Back
        </LabelBack>
      )}
      {Array(numberOfSteps)
        .fill(null)
        .map((_, i) => {
          const isDotActive = i <= currentStep;
          return (
            <Dot
              key={`dot#${i}`}
              active={isDotActive}
              onClick={() => {
                if (isDotActive && i !== currentStep)
                  history.push({
                    pathname: steps[i],
                    state: { backward: true },
                  });
              }}
            />
          );
        })}
    </div>
  );
};

export default ProgressDots;
