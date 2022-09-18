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
// const dayMonth = date.getDate();
days[day].active = true;
export const calenderSlice = createSlice({
  name: "calender",
  initialState: {
    currentDay: day,
    days: days,
    daysClone: daysClone,
    // days: [
    //   { day: "sun", active: false },
    //   { day: "mon", active: false },
    //   { day: "tues", active: false },
    //   { day: "wed", active: false },
    //   { day: "thur", active: false },
    //   { day: "fri", active: false },
    //   { day: "sat", active: false },
    // ],
  },
  reducers: {
    setActiveReducer: (state, action) => {
      //   const daysClone = [...days];
      //   console.log(daysClone);
      state.daysClone[action.payload.index].active = true;
      //   state.days = daysClone;
      console.log(state.days);
    },

    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // },
  },
});
// setActive(day, );

// Action creators are generated for each case reducer function
export const { setActiveReducer } = calenderSlice.actions;

export default calenderSlice.reducer;
