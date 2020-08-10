import React from "react";
import Input from "../../components/Input";
import WizardStep from "../../components/Wizard/WizardStep";
import useLocalStorage from "../../utils/useLocalStorage";
import { useNavigate } from "react-router-dom";
import Wizard from "../../components/Wizard";
import { WEIGHT, NAME } from "../../constants/localStorageVariables";
import steps from "../../constants/steps";
import paths from "../../constants/paths";

const Weight = () => {
  const [weight, setWeight] = useLocalStorage(WEIGHT, "");
  const [fullname] = useLocalStorage(NAME, "");
  const navigate = useNavigate();
  const nextStep = steps.indexOf(paths.weight) + 1;
  return (
    <Wizard>
      <WizardStep
        title={`What's your weight, ${fullname}?`}
        onConfirmation={() => navigate(steps[nextStep])}
        disabled={!weight}
      >
        <Input
          type="number"
          placeholder="Your weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          unit="Kg"
        />
      </WizardStep>
    </Wizard>
  );
};

export default Weight;
