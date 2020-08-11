import React from "react";
import Tile from "../../components/Tile";
import WizardStep from "../../components/Wizard/WizardStep";
import useLocalStorage from "../../utils/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { WORKOUT } from "../../constants/localStorageVariables";
import paths from "../../constants/paths";
import "./style.css";
import { ReactComponent as Easy } from "../../assets/Easy.svg";
import { ReactComponent as Medium } from "../../assets/Medium.svg";
import { ReactComponent as Hard } from "../../assets/Hard.svg";
import { ReactComponent as Extreme } from "../../assets/Extreme.svg";

const WORKOUTS = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
  extreme: "extreme",
};

const Workout = () => {
  const [workout, setWorkout] = useLocalStorage(WORKOUT, null);

  const navigate = useNavigate();
  const handleWorkoutClick = (value) => {
    if (WORKOUTS[value] === workout) setWorkout(null);
    else setWorkout(WORKOUTS[value]);
  };
  return (
    <WizardStep
      title={`What's your preferred workout?`}
      disabled={!workout}
      onConfirmation={() => navigate(paths.confirmation)}
      confirmationLabel="Complete"
    >
      <div className="TilesWrapper">
        <Tile
          label="Easy"
          description="All you need to stay healthy"
          image={Easy}
          onClick={() => handleWorkoutClick(WORKOUTS.easy)}
          selected={workout === WORKOUTS.easy}
        />
        <Tile
          label="Medium"
          description="Not too easy, not too hard"
          image={Medium}
          onClick={() => handleWorkoutClick(WORKOUTS.medium)}
          selected={workout === WORKOUTS.medium}
          color={Tile.color.yellow}
        />
        <Tile
          label="Hard"
          description="Pretty intense workout"
          image={Hard}
          onClick={() => handleWorkoutClick(WORKOUTS.hard)}
          selected={workout === WORKOUTS.hard}
          color={Tile.color.red}
        />
        <Tile
          label="Extreme"
          description="Challenge yourself!"
          image={Extreme}
          onClick={() => handleWorkoutClick(WORKOUTS.extreme)}
          selected={workout === WORKOUTS.extreme}
          color={Tile.color.black}
        />
      </div>
    </WizardStep>
  );
};

export default Workout;
