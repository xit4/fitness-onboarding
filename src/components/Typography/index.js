import React from "react";
import "./style.css";

const Title = ({ children }) => {
  return <h1 className="Title">{children}</h1>;
};

const TitleCard = ({ children }) => {
  return <h1 className="TitleCard">{children}</h1>;
};

const Paragraph = ({ children }) => {
  return <p className="Paragraph">{children}</p>;
};

const LabelInput = ({ children }) => {
  return <p className="LabelInput">{children}</p>;
};

const LabelBack = ({ children }) => {
  return <p className="LabelBack">{children}</p>;
};

const LabelButton = ({ children }) => {
  return <p className="LabelButton">{children}</p>;
};

export { Title, TitleCard, Paragraph, LabelInput, LabelBack, LabelButton };
