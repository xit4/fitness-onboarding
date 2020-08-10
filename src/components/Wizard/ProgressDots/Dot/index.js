import React from "react";
import "./style.css";
import cn from "../../../../utils/classnames";

const Dot = ({ active, onClick }) => {
  return <div className={cn("Dot", { active })} onClick={onClick} />;
};

export default Dot;
