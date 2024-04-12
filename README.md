YouTube - Cosden Solutions - Zustand - Complete Tutorial

(https://www.youtube.com/watch?v=_ngCLZ5Iz-0)

# Installation

- pnpm add zustand

# Syncronous Action

- Creae a new file -- src/store.ts - and create a counter store
  - The place where you store your state and any function that updates your state
- Component App.tsx uses the count that is changed in the ButtonGroup component
  - Display count from the App component
  - Change the count from the ButtonGroup component

# Asyncronous Action

- Implement incrementAsync function in store.ts

# Using the store outside the component

- You can access the useCounterStore outside your component in any random function
- Create a function simpleFunction.ts and diplay the count as an alert to the user

# Two best practices

- Whenever you are accessing a piece of state of a function be as specific as possible
  - `state.count` in `App.tsx` instead of just `state`
- Whenever you are defining your stores, you always want to group them by specific features
  - Eg., CounterStore has every thing to do with the count
  - You don't want to have a giant store - that does not scale well
