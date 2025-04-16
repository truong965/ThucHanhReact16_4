import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './TodoSlicer'
// Create the Redux store
const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export default store;