// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

// Create the Redux store and include the theme reducer
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
