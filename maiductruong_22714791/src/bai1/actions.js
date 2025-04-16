// src/redux/actions.js

// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action creators
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
