

export function Header(props: { onToggleView: () => void; currentView: "map" | "manifesto" }) {
  return (
    <div style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
      <button onClick={props.onToggleView}>Alternar vista</button>
      <span style={{ marginLeft: 12 }}>Vista: {props.currentView}</span>
    </div>
  );
}
