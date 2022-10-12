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
    loading: false,
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
    setShowAddTodoReducer: (state, action) => {
      state.showAddTodo = action.payload.showAddTodo;
    },
    setLoadingReducer: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const {
  setLoadingReducer,
  setShowAddTodoReducer,
  setNoteInputisValidReducer,
  setTaskInputisValidReducer,
  setNoteInputReducer,
  setTaskInputReducer,
  setFormIsValid,
} = addTodoFormSlice.actions;

export default addTodoFormSlice.reducer;
