// src/redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

// Define the initial state for the background color
const initialState = {
    cart:[]
};
const   cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
        addItem:(state,action)=>{
            const newItem = action.payload;
            // Check if the item already exists in the cart
            const existingItem = state.cart.find(item => item.id === newItem.id);
            
            if (existingItem) {
              // If the item exists, update the quantity
              existingItem.quantity += newItem.quantity;
            } else {
              // If the item doesn't exist, add it to the cart
              state.cart.push({...newItem, quantity: newItem.quantity || 1});
            }   
        }, 
        removeItem:(state,action)=>{
            const itemId = action.payload; // Get the item id to be removed
            // Filter out the item by id
            state.cart = state.cart.filter(item => item.id !== itemId);
        },
        updateQuantity:(state,action)=>{
            const { id, quantity } = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) {
              item.quantity = quantity;
            }
        },
  },
});

// Export the action and reducer
export const { addItem,removeItem,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
