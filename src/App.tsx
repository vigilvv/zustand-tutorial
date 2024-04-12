import { ButtonGroup } from "./ButtonGroup";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count); // Here have the hook return state.count instead of the entire "state". Because, this component will rerender when what is returned changes. If you return "state", changes in any other properties of state will trigger a re-render.

  return (
    <>
      <h1 style={{ fontSize: "3rem", color: "darkblue" }}>Zustand tutorial</h1>
      <br />
      <div
        style={{
          backgroundColor: "palegoldenrod",
          height: "10rem",
          width: "70vw",
          borderRadius: "10px",
          margin: "auto",
          padding: "32px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "seagreen" }}>
          Count is: {count}
        </h2>
        <ButtonGroup />
      </div>
    </>
  );
}

export default App;
