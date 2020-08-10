import React from "react";
import Tile from "../../components/Tile";
import WizardStep from "../../components/Wizard/WizardStep";
import useLocalStorage from "../../utils/useLocalStorage";
import { useNavigate } from "react-router-dom";
import Wizard from "../../components/Wizard";
import { WORKOUT } from "../../constants/localStorageVariables";
import paths from "../../constants/paths";
import "./style.css";
import Easy from "../../assets/Easy.svg";
import Medium from "../../assets/Medium.svg";
import Hard from "../../assets/Hard.svg";
import Extreme from "../../assets/Extreme.svg";

const WORKOUTS = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
  extreme: "extreme",
};

const Workout = () => {
  const [workout, setWorkout] = useLocalStorage(WORKOUT, null);

  const navigate = useNavigate();
  return (
    <Wizard>
      <WizardStep
        title={`What's your preferred workout?`}
        disabled={!workout}
        onConfirmation={() => navigate(paths.confirmation)}
        confirmationLabel="Complete"
      >
        <div className="TilesWrapper">
          <Tile label="Easy" description="All you need to stay healthy" image={Easy} />
          <Tile label="Medium" description="Not too easy, not too hard" image={Medium} color={Tile.color.yellow} />
          <Tile label="Hard" description="Pretty intense workout" image={Hard} color={Tile.color.red} />
          <Tile label="Extreme" description="Challenge yourself" image={Extreme} color={Tile.color.black} />
        </div>
      </WizardStep>
    </Wizard>
  );
};

export default Workout;
