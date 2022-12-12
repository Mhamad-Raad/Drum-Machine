import Drums from "./Drum/Drums";
import Display from "./Display";

import "./MachineWrapper.css";

export default function MachineWarappar({
  drumClickHandler,
  val,
  powerHandler,
  power,
  volumeHandler,
  volume,
}) {
  return (
    <div id="drum-machine">
      <Drums drumClickHandler={drumClickHandler} />
      <Display
        val={val}
        powerHandler={powerHandler}
        power={power}
        volumeHandler={volumeHandler}
        volume={volume}
      />
    </div>
  );
}
