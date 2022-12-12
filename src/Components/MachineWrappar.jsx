import { useState } from "react";
import Drums from "./Drum/Drums";
import Display from "./Display";
import song1 from "../Assets/Q.mp3";
import song2 from "../Assets/W.mp3";
import song3 from "../Assets/E.mp3";
import song4 from "../Assets/A.mp3";
import song5 from "../Assets/S.mp3";
import song6 from "../Assets/D.mp3";
import song7 from "../Assets/Z.mp3";
import song8 from "../Assets/X.mp3";
import song9 from "../Assets/C.mp3";
import "./MachineWrapper.css";

export default function MachineWarappar() {
  const [outPut, setOutPut] = useState("");

  const drumClickHandler = (BName) => {
    const song = {
      Q: song1,
      W: song2,
      E: song3,
      A: song4,
      S: song5,
      D: song6,
      Z: song7,
      X: song8,
      C: song9,
    }[BName];

    const audio = new Audio(song);
    audio.play();
    setOutPut(BName);
  };
  return (
    <div id="drum-machine">
      <Drums drumClickHandler={drumClickHandler} />
      <Display val={outPut} />
    </div>
  );
}
