import { useState, useRef, useEffect } from "react";
import MachineWarappar from "./Components/MachineWrappar";
import song1 from "./Assets/Q.mp3";
import song2 from "./Assets/W.mp3";
import song3 from "./Assets/E.mp3";
import song4 from "./Assets/A.mp3";
import song5 from "./Assets/S.mp3";
import song6 from "./Assets/D.mp3";
import song7 from "./Assets/Z.mp3";
import song8 from "./Assets/X.mp3";
import song9 from "./Assets/C.mp3";

import "./App.css";

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
};

function App() {
  const ref = useRef();
  const [outPut, setOutPut] = useState("");

  useEffect(() => {
    ref.current.focus();
  }, []);

  const checker = (e) => {
    if (e.key.toUpperCase() in song) {
      const audio = new Audio(song[e.key.toUpperCase()]);
      audio.play();
      setOutPut(e.key.toUpperCase());
    }
  };

  const drumClickHandler = (BName) => {
    const audio = new Audio(song[BName]);
    audio.play();
    setOutPut(BName);
  };

  return (
    <div className="App" onKeyDown={checker} tabIndex={-1} ref={ref}>
      <MachineWarappar drumClickHandler={drumClickHandler} val={outPut} />
    </div>
  );
}

export default App;

