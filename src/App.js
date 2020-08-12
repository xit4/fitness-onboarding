import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Confirmation from "./views/Confirmation";
import paths from "./constants/paths";
import Wizard from "./components/Wizard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import cn from "./utils/classnames";

function App() {
  const location = useLocation();
  const hasAnimation = !location.state?.noAnimation;
  const backwardAnimation = location.state?.backward;
  const hasSlideAnimation = [paths.name, paths.weight, paths.workout].includes(
    location.pathname
  );
  const hasCompleteAnimation = [paths.confirmation].includes(location.pathname);
  const animationName = cn({
    slide: hasSlideAnimation && hasAnimation && !backwardAnimation,
    "slide-backward": hasSlideAnimation && hasAnimation && backwardAnimation,
    complete: hasCompleteAnimation,
  });
  return (
    <div className="App">
      <TransitionGroup
        childFactory={(child) =>
          React.cloneElement(child, { classNames: animationName })
        }
        component={null}
      >
        <CSSTransition
          key={location.key}
          classNames={animationName}
          timeout={750}
        >
          <Switch location={location}>
            <Route path={paths.confirmation}>
              <Confirmation />
            </Route>
            <Route path="/">
              <Wizard />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
