import React from "react";
import "./style.css";
import ProgressDots from "./ProgressDots";
import steps from "../../constants/steps";
import Name from "../../views/Name";
import Weight from "../../views/Weight";
import Workout from "../../views/Workout";
import { useLocation, Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import paths from "../../constants/paths";
import cn from "../../utils/classnames";

const Wizard = ({ children }) => {
  const location = useLocation();
  const hasAnimation = !location.state?.noAnimation;
  const backwardAnimation = location.state?.backward;
  const animationName = cn({
    slide: hasAnimation && !backwardAnimation,
    "slide-backward": hasAnimation && backwardAnimation,
  });

  return (
    <div className="Wizard">
      <ProgressDots
        numberOfSteps={steps.length}
        currentStep={steps.indexOf(location.pathname)}
      />
      <TransitionGroup
        childFactory={(child) =>
          React.cloneElement(child, { classNames: animationName })
        }
        component={null}
      >
        <CSSTransition
          key={location.key}
          classNames={animationName}
          timeout={1000}
        >
          <Switch location={location}>
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
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Wizard;
