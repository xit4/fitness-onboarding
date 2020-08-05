import React from "react";
import "./style.css";

const Dot = ({ active }) => {
  return <div className={`Dot ${active ? "active" : ""}`} />;
};

export default Dot;
