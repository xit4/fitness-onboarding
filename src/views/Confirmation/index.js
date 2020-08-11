import React from "react";
import Illustration from "../../assets/Illustration.png";
import Illustration2x from "../../assets/Illustration@2x.png";
import { Title, Paragraph, LabelButton } from "../../components/Typography";
import Button from "../../components/Button";
import "./style.css";
import { useHistory } from "react-router-dom";
import paths from "../../constants/paths";

const Confirmation = () => {
  const history = useHistory();
  return (
    <div className="Confirmation">
      <img
        alt="Confirmation Illustration"
        src={Illustration}
        srcSet={`${Illustration} 2x, ${Illustration2x} 1x`}
      />
      <Title>You did it!</Title>
      <Title>Let's get moving!</Title>
      <Paragraph>
        Personalized plan, diet and a fitness coach! Everything ready when you
        are, let's get started!
      </Paragraph>
      <Button onClick={() => history.push(paths.name)}>
        <LabelButton>Start your journey!</LabelButton>
      </Button>
    </div>
  );
};

export default Confirmation;
