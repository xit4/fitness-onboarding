import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Name from "./views/Name";
import Weight from "./views/Weight";
import Workout from "./views/Workout";
import Confirmation from "./views/Confirmation";
import paths from "./constants/paths";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={paths.root} element={<Navigate to={paths.name} />} />
          <Route path={paths.name} element={<Name />} />
          <Route path={paths.weight} element={<Weight />} />
          <Route path={paths.workout} element={<Workout />} />
          <Route path={paths.confirmation} element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
