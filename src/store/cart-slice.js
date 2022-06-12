import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0
  },
  reducers: {
    addItemToCart(state, action){
      //check if the added item is already in cart
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id)
      
      //item not present in cart
      if(existingIndex === -1){
         state.items = [...state.items, { ...action.payload, amount: 1}] 
      }
      else {
        state.items[existingIndex].amount++ 
      }
      state.totalAmount += action.payload.price
    },
    removeItemFromCart(state, action){
      //get index of item
      const existingIndex = state.items.findIndex(item => item.id === action.payload)

      state.totalAmount -= state.items[existingIndex].price

      if(state.items[existingIndex].amount === 1){
        state.items = state.items.filter(item => item.id !== action.payload)
      }
      else {
        state.items[existingIndex].amount-- 
      }
    },
    clearCart(state){
      state.items = []
      state.totalAmount = 0;
      }
    }
  }
)

export const cartActions = cartSlice.actions

export default cartSlice