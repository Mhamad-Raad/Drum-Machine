export default function DrumPad({ drumName }) {
  return (
    <div className="drum-pad" id={drumName}>
      {drumName}
    </div>
  );
}
