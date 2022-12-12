import React from "react";

export default function Display({ val }) {
  return (
    <div id="display">
      <label className="switch margin">
        <input type="checkbox" />
        <span className="slider" />
      </label>
      <div className="value-show margin">{val}</div>
      <input type="range" min="1" max="100" className="Vslider margin" />
      <label className="switch margin">
        <input type="checkbox" />
        <span className="slider" />
      </label>
    </div>
  );
}
