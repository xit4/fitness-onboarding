import React from "react";
import Tile from "../../components/Tile";
import WizardStep from "../../components/Wizard/WizardStep";
import useLocalStorage from "../../utils/useLocalStorage";
import { useNavigate } from "react-router-dom";
import Wizard from "../../components/Wizard";
import { WORKOUT } from "../../constants/localStorageVariables";
import steps from "../../constants/steps";
import paths from "../../constants/paths";

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
        <Tile />
        <Tile selected color={Tile.color.yellow} />
        <Tile color={Tile.color.red} />
        <Tile color={Tile.color.black} />
      </WizardStep>
    </Wizard>
  );
};

export default Workout;
