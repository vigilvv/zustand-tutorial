import { simpleFunction } from "./simpleFunction";
import { useCounterStore } from "./store";

export const ButtonGroup = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  return (
    <div
      style={{
        display: "flex",
        gap: "32px",
        justifyContent: "center",
        marginTop: "32px",
      }}
    >
      <button style={{ padding: "8px" }} onClick={increment}>
        Increment
      </button>
      <button style={{ padding: "8px" }} onClick={decrement}>
        Decrement
      </button>
      <button style={{ padding: "8px" }} onClick={incrementAsync}>
        Increment Async
      </button>

      {/* Count Alert is done by an outside function */}
      <button style={{ padding: "8px" }} onClick={() => simpleFunction()}>
        Count Alert
      </button>
      {/* Count Reset is done by an outside function */}
      <button style={{ padding: "8px" }} onClick={() => simpleFunction(0)}>
        Reset Count
      </button>
    </div>
  );
};
