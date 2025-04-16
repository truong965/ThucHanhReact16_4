// src/redux/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  count: 0,
};

// Create the slice
const counterSlice = createSlice({
  name: 'counter', // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    increment: (state) => {
      state.count += 1; // Redux Toolkit uses Immer internally, so you can mutate the state directly
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Export reducer (to be used in store)
export default counterSlice.reducer;
