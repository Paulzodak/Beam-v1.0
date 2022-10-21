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
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const day = date.getDay();
const dayMonth = date.getDate();
const month = date.getMonth();
days[day].active = true;
export const calenderSlice = createSlice({
  name: "calender",
  initialState: {
    currentDay: day,
    staticDay: day,
    month: months[month],
    dayMonth: dayMonth,
    dum: false,
    days: days,
  },
  reducers: {
    setActiveReducer: (state, action) => {
      const dummyDate = [
        { day: "Sun", active: false },
        { day: "Mon", active: false },
        { day: "Tue", active: false },
        { day: "Wed", active: false },
        { day: "Thur", active: false },
        { day: "Fri", active: false },
        { day: "Sat", active: false },
      ];
      state.days = dummyDate;
      state.days[action.payload.index].active = true;
      state.currentDay = action.payload.index;
    },
    setDumReducer: (state) => {
      state.dum = !state.dum;
    },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // },
  },
});
// setActive(day, );

// Action creators are generated for each case reducer function
export const { setActiveReducer, setDumReducer } = calenderSlice.actions;

export default calenderSlice.reducer;
