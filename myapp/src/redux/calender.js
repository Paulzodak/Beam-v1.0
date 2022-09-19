import { createSlice } from "@reduxjs/toolkit";
const days = [
  { day: "Sun", active: false },
  { day: "Mon", active: false },
  { day: "Tue", active: false },
  { day: "Wed", active: false },
  { day: "Thur", active: false },
  { day: "Fri", active: false },
  { day: "Sat", active: false },
];
const daysClone = [
  { day: "Sun", active: false },
  { day: "Mon", active: false },
  { day: "Tue", active: false },
  { day: "Wed", active: false },
  { day: "Thur", active: false },
  { day: "Fri", active: false },
  { day: "Sat", active: false },
];
const date = new Date();
const day = date.getDay();
days[day].active = true;
export const calenderSlice = createSlice({
  name: "calender",
  initialState: {
    currentDay: day,
    days: days,
    daysClone: daysClone,
  },
  reducers: {
    setActiveReducer: (state, action) => {
      state.daysClone[action.payload.index].active = true;
      console.log(state.days);
    },
  },
});
export const { setActiveReducer } = calenderSlice.actions;

export default calenderSlice.reducer;
