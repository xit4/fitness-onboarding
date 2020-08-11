import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from "./views/Confirmation";
import paths from "./constants/paths";
import Wizard from "./components/Wizard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Wizard />} />
          <Route path={paths.confirmation} element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
