export default function DrumPad({ drumName, clicker }) {
  return (
    <button
      className="drum-pad"
      id={drumName}
      onClick={() => clicker(drumName)}
    >
      {drumName}
    </button>
  );
}
