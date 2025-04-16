// src/redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the background color
const initialState = {
  backgroundColor: 'white', // Default color is white
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Action to toggle the background color
    toggleBackgroundColor: (state) => {
      state.backgroundColor = state.backgroundColor === 'white' ? 'black' : 'white';
    },
  },
});

// Export the action and reducer
export const { toggleBackgroundColor } = themeSlice.actions;
export default themeSlice.reducer;
