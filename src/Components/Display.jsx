export default function Display({ val, powerHandler, power }) {
  console.log(power);
  return (
    <div id="display">
      <p>Power</p>
      <label className="switch margin">
        <input
          type="checkbox"
          onChange={() => powerHandler(!power)}
          checked={power}
        />
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
