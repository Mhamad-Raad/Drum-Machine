import React from "react";

export default function Display() {
  return (
    <div id="display">
      <label class="switch margin">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>

      <div className="value-show margin"></div>

      <input type="range" min="1" max="100" class="Vslider margin" />

      <label class="switch margin">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  );
}
