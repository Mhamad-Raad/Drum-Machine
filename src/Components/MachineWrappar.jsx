import Drums from "./Drum/Drums";
import Display from "./Display";

import "./MachineWrapper.css";

export default function MachineWarappar({ drumClickHandler, val }) {
  return (
    <div id="drum-machine">
      <Drums drumClickHandler={drumClickHandler} />
      <Display val={val} />
    </div>
  );
}
