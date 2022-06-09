import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOpen: false
  },
  reducers: {
    showChart(state) {
      state.isOpen = true
    },
    hideCart(state) {
      state.isOpen = false
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice