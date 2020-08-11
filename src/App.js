import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Confirmation from "./views/Confirmation";
import paths from "./constants/paths";
import Wizard from "./components/Wizard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={paths.confirmation}>
            <Confirmation />
          </Route>
          <Route path="/">
            <Wizard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
