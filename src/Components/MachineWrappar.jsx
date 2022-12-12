import Drums from "./Drum/Drums";
import Display from "./Display";

import "./MachineWrapper.css";

export default function MachineWarappar() {
  return (
    <div id="drum-machine">
      <Drums />
      <Display />
    </div>
  );
}
