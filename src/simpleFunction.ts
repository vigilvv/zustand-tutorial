import { useCounterStore } from "./store";

export const simpleFunction = (newCount?: number) => {
  if (newCount === undefined) {
    const count = useCounterStore.getState().count; // get the state
    alert(`Count is ${count}`);
  } else {
    //=== You can also update the state
    useCounterStore.setState({ count: newCount });
  }
};
