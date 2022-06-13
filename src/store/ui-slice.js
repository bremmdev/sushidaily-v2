import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showCart: false,
    showOrderForm: false,
    notification: {
      status: null,
      message: null
    }
  },
  reducers: {
    showCart(state) {
      state.showCart = true
      //clear any 'open' notifications
      state.notification = {
        status: null,
        message: null
      }
    },
    hideCart(state) {
      state.showCart = false
    },
    showOrderForm(state) {
      state.showOrderForm = true
    },
    hideOrderForm(state) {
      state.showOrderForm = false
    },
    hideFormAndCart(state){
      state.showOrderForm = false
      state.showCart = false
    },
    setNotification(state, action) {
      state.notification = {
        ...action.payload
      }
    },
    clearNotification(state) {
      state.notification = {
        status: null,
        message: null
      }
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice