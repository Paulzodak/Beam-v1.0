import { createSlice } from "@reduxjs/toolkit";

export const addTodoFormSlice = createSlice({
  name: "addTodoform",
  initialState: {
    showAddTodo: false,
    taskInput: "",
    noteInput: "",
    taskInputIsValid: true,
    noteInputIsValid: true,
    formIsValid: false,
  },
  reducers: {
    setTaskInputReducer: (state, action) => {
      state.taskInput = action.payload.taskInput;
    },
    setNoteInputReducer: (state, action) => {
      state.noteInput = action.payload.noteInput;
    },
    setNoteInputisValidReducer: (state, action) => {
      state.noteInputIsValid = action.payload.noteInputIsValid;
    },
    setTaskInputisValidReducer: (state, action) => {
      state.taskInputIsValid = action.payload.taskInputIsValid;
    },
    setFormIsValid: (state, action) => {
      state.formIsValid = action.payload.formIsValid;
    },
    setShowAddTodoReducer: (state) => {
      state.showAddTodo = !state.showAddTodo;
    },
  },
});

export const {
  setShowAddTodoReducer,
  setNoteInputisValidReducer,
  setTaskInputisValidReducer,
  setNoteInputReducer,
  setTaskInputReducer,
  setFormIsValid,
} = addTodoFormSlice.actions;

export default addTodoFormSlice.reducer;
