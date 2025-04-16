// src/redux/store.js
// import { createStore } from 'redux';
// import counterReducer from './reducer';

// // Create the Redux store
// const store = createStore(counterReducer);

// export default store;

// toolkit
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlicer';

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;