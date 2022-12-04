import "./MachineWrapper.css";

export default function MachineWarappar() {
  return (
    <div id="drum-machine">
      <div id="drums">
        <div className="drum-pad" id="Q">
          Q
        </div>
        <div className="drum-pad" id="W">
          W
        </div>
        <div className="drum-pad" id="E">
          E
        </div>
        <div className="drum-pad" id="A">
          A
        </div>
        <div className="drum-pad" id="S">
          S
        </div>
        <div className="drum-pad" id="D">
          D
        </div>
        <div className="drum-pad" id="Z">
          Z
        </div>
        <div className="drum-pad" id="X">
          X
        </div>
        <div className="drum-pad" id="C">
          C
        </div>
      </div>
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
    </div>
  );
}
