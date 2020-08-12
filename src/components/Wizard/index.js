import React from "react";
import "./style.css";
import ProgressDots from "./ProgressDots";
import steps from "../../constants/steps";
import Name from "../../views/Name";
import Weight from "../../views/Weight";
import Workout from "../../views/Workout";
import { useLocation, Switch, Route, Redirect } from "react-router-dom";
import paths from "../../constants/paths";

const Wizard = ({ children }) => {
  const location = useLocation();

  return (
    <div className="Wizard">
      <ProgressDots
        numberOfSteps={steps.length}
        currentStep={steps.indexOf(location.pathname)}
      />
      <Switch>
        <Route path={paths.name}>
          <Name />
        </Route>
        <Route path={paths.weight}>
          <Weight />
        </Route>
        <Route path={paths.workout}>
          <Workout />
        </Route>
        <Route path={paths.root}>
          <Redirect
            to={{ pathname: paths.name, state: { noAnimation: true } }}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Wizard;
