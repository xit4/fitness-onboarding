import React from "react";
import "./style.css";
import cn from "../../utils/classnames";
import { TitleCard, Paragraph } from "../Typography";

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
  image: Image = "",
  label = "",
  description = "",
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
    >
      <Image />
      <TitleCard>{label}</TitleCard>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

Tile.color = COLORS;

export default Tile;
