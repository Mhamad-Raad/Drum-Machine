import { useState } from "react";

export default function Display({ val }) {
  let [power, setPower] = useState(true);
  const powerHandler = (e) => {
    setPower(e.target.checked);
  };
  console.log(power);
  return (
    <div id="display">
      <p>Power</p>
      <label className="switch margin">
        <input type="checkbox" onChange={powerHandler} checked={power} />
        <span className="slider" />
      </label>
      <div className="value-show margin">{val}</div>
      <input type="range" min="1" max="100" className="Vslider margin" />

      <p>Bank</p>
      <label className="switch margin">
        <input type="checkbox" />
        <span className="slider" />
      </label>
    </div>
  );
}
