import React from "react";
import "./style.css";
import ProgressDots from "./ProgressDots";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import steps from "../../constants/steps";
import paths from "../../constants/paths";
import Name from "../../views/Name";
import Weight from "../../views/Weight";
import Workout from "../../views/Workout";

const Wizard = ({ children }) => {
  const location = useLocation();
  return (
    <div className="Wizard">
      <ProgressDots
        numberOfSteps={steps.length}
        currentStep={steps.indexOf(location.pathname)}
      />
      <Routes>
        <Route path="/" element={<Navigate to={paths.name} />} />
        <Route path="name" element={<Name />} />
        <Route path="weight" element={<Weight />} />
        <Route path="workout" element={<Workout />} />
      </Routes>
      {children}
    </div>
  );
};

export default Wizard;
