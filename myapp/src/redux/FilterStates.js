import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    active: false,
    all: true,
  },
  reducers: {
    setAllReducer: (state) => {
      state.active = false;
      state.all = !state.all;
    },
    setActiveReducer: (state) => {
      state.active = true;
      state.all = false;
    },
    setCompletedReducer: (state) => {
      state.active = false;
      state.all = false;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveReducer, setAllReducer, setCompletedReducer } =
  filterSlice.actions;

export default filterSlice.reducer;
