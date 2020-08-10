import React from "react";
import "./style.css";
import cn from "../../../../utils/classnames";

const Dot = ({ active }) => {
  return <div className={cn("Dot", { active })} />;
};

export default Dot;
