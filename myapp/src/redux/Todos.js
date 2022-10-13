import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isTodos: false,
    todoIsEmpty: false,
  },
  reducers: {
    setTodoReducer: (state, action) => {
      state.todos = action.payload.todos;
    },
    setIsTodos: (state, action) => {
      state.isTodos = action.payload.isTodo;
    },
    pushTodoReducer: (state, action) => {
      state.todos.push(action.payload.pushTodo);
    },
    setTodoIsEmpty: (state, action) => {
      state.todoIsEmpty = action.payload.todoIsEmpty;
    },
    setTodoActiveness: (state, action) => {
      state.todos.map((item) => {
        if (String(action.payload.id) === String(item.id)) {
          item.done = !item.done;
        }
      });
    },
    deleteTodoReducer: (state, action) => {
      state.todos.map((item, index) => {
        if (String(action.payload.id) === String(item.id)) {
          state.todos.splice(index, 1);
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  deleteTodoReducer,
  setTodoActiveness,
  setTodoReducer,
  setTodoIsEmpty,
  pushTodoReducer,
  setIsTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
