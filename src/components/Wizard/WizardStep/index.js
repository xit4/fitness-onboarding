import React from "react";
import "./style.css";
import { Title } from "../../Typography";

const WizardStep = ({ title = "" }) => {
  return (
    <div className="WizardStep">
      <div className="TitleWrapper">
        <Title>{title}</Title>
      </div>
    </div>
  );
};

export default WizardStep;
