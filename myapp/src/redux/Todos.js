import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      time: "12:00AM",
      header: "pray",
      details: "pray for financial breakthrough",
      done: false,
      day: 0,
    },
    {
      time: "3:00PM",
      header: "Meeting",
      details: "Discuss Million Website",
      done: false,
      day: 1,
    },
    {
      time: "05:30PM",
      header: "Fitness",
      details: "Coach Jill Steven",
      done: true,
      day: 2,
    },
    {
      time: "07:30PM",
      header: "Aperitif",
      details: "Michaela's House",
      done: false,
      day: 2,
    },
    {
      time: "9:00PM",
      header: "Finish App design",
      details: "Complete all Screens",
      done: false,
      day: 3,
    },
    {
      time: "4:00PM",
      header: "Watch Football",
      details: "Chelsea",
      done: false,
      day: 4,
    },
    {
      time: "2:30PM",
      header: "Watch Football",
      details: "Manchester united",
      done: false,
      day: 5,
    },
    {
      time: "8:00AM",
      header: "pray",
      details: "Morning devotion",
      done: false,
      day: 5,
    },
    {
      time: "5:30PM",
      header: "music",
      details: "score songs",
      done: false,
      day: 5,
    },
    {
      time: "4:00PM",
      header: "Watch Football",
      details: "Chelsea",
      done: false,
      day: 6,
    },
  ],
  reducers: {
    setTodoReducer: (state, action) => {
      state.push(action.payload.newTodo);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodoReducer } = todoSlice.actions;

export default todoSlice.reducer;
