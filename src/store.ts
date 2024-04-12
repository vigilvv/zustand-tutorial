import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  incrementAsync: () => Promise<void>;
};

// This is a custom hook
export const useCounterStore = create<CounterStore>((set) => ({
  // The set function allows you to set a new value to the state
  count: 0, // initial state of the store
  increment: () => {
    // set({ count: 1 }); // You can directly set the state with this
    set((state) => ({ count: state.count + 1 })); // Pass it a function that returns the new state. This function has access to the previous state
  },
  decrement: () => {
    // set({ count: -1 });
    set((state) => ({ count: state.count - 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for a second - mocking the async behaviour

    // const response = await new Promise((resolve) => setTimeout(resolve, 1000)); // When you are actually using a fetch request, the format will be something like this. You can then use data from this response in the set function.
    set((state) => ({ count: state.count + 1 })); // Async is this simple in Zustand - whenever you have your data ready, just call the set function
  },
}));
