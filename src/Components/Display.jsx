export default function Display({
  val,
  powerHandler,
  power,
  volume,
  volumeHandler,
}) {
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
      <input
        type="range"
        min="0"
        max="100"
        className="Vslider margin"
        onChange={(event) => {
          volumeHandler(event.target.value);
        }}
        value={volume * 100}
      />
    </div>
  );
}
