import { createSlice } from "@reduxjs/toolkit";

export const addTodoFormSlice = createSlice({
  name: "addTodoform",
  initialState: {
    showAddTodo: false,
    taskInput: "",
    noteInput: "",
  },
  reducers: {
    setTaskInputReducer: (state, action) => {
      state.taskInput = action.payload.taskInput;
    },
    setNoteInputReducer: (state, action) => {
      state.noteInput = action.payload.noteInput;
    },
    setShowAddTodoReducer: (state) => {
      state.showAddTodo = !state.showAddTodo;
    },
  },
});

export const {
  setShowAddTodoReducer,
  setNoteInputReducer,
  setTaskInputReducer,
} = addTodoFormSlice.actions;

export default addTodoFormSlice.reducer;
