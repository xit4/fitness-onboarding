import React from "react";
import Input from "../../components/Input";
import WizardStep from "../../components/Wizard/WizardStep";
import useLocalStorage from "../../utils/useLocalStorage";
import { useHistory } from "react-router-dom";
import { NAME } from "../../constants/localStorageVariables";
import steps from "../../constants/steps";
import paths from "../../constants/paths";

const Name = () => {
  const [fullname, setFullname] = useLocalStorage(NAME, "");
  const history = useHistory();
  const nextStep = steps.indexOf(paths.name) + 1;
  return (
    <WizardStep
      title="Hi there, how should we call you?"
      onConfirmation={() => history.push(steps[nextStep])}
      disabled={!fullname}
    >
      <Input
        placeholder="Your name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
    </WizardStep>
  );
};

export default Name;
