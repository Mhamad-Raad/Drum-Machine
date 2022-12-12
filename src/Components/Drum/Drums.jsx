import DrumPad from "./DrumPad";
export default function Drums({ drumClickHandler }) {
  return (
    <div id="drums">
      <DrumPad
        drumName="Q"
        clicker={drumClickHandler}
      />
      <DrumPad drumName="W" clicker={drumClickHandler} />
      <DrumPad drumName="E" clicker={drumClickHandler} />
      <DrumPad drumName="A" clicker={drumClickHandler} />
      <DrumPad drumName="S" clicker={drumClickHandler} />
      <DrumPad drumName="D" clicker={drumClickHandler} />
      <DrumPad drumName="Z" clicker={drumClickHandler} />
      <DrumPad drumName="X" clicker={drumClickHandler} />
      <DrumPad drumName="C" clicker={drumClickHandler} />
    </div>
  );
}
