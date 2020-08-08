import React from "react";
import "./style.css";
import cn from "../../utils/classnames";

const COLORS = {
  red: "red",
  black: "black",
  yellow: "yellow",
  purple: "purple",
};

const Tile = ({
  onClick = () => {},
  selected = false,
  color = COLORS.purple,
}) => {
  return (
    <div
      className={cn("Tile", {
        selected,
        red: color === COLORS.red,
        black: color === COLORS.black,
        yellow: color === COLORS.yellow,
      })}
      onClick={onClick}
    ></div>
  );
};

Tile.color = COLORS;

export default Tile;
