import React from "react";
import Input from "../../components/Input";
import WizardStep from "../../components/Wizard/WizardStep";
import useLocalStorage from "../../utils/useLocalStorage";
import { useHistory } from "react-router-dom";
import { WEIGHT, NAME } from "../../constants/localStorageVariables";
import steps from "../../constants/steps";
import paths from "../../constants/paths";

const Weight = () => {
  const [weight, setWeight] = useLocalStorage(WEIGHT, "");
  const [fullname] = useLocalStorage(NAME, "");
  const history = useHistory();
  const nextStep = steps.indexOf(paths.weight) + 1;
  return (
    <WizardStep
      title={`What's your weight, ${fullname}?`}
      onConfirmation={() => history.push(steps[nextStep])}
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
  );
};

export default Weight;
