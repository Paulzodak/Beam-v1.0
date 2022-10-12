import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    isTodos: false,
    todoIsEmpty: false,
    // {
    //   id: 1,
    //   time: "12:00AM",
    //   header: "pray",
    //   details: "pray for financial breakthrough",
    //   done: false,
    //   day: 0,
    // },
  },
  reducers: {
    setTodoReducer: (state, action) => {
      // state.todos.push(action.payload.todos);
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
      // state.todos[action.payload.id].done = action.payload.state;
      state.todos.map((item) => {
        if (String(action.payload.id) === String(item.id)) {
          item.done = !item.done;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTodoActiveness,
  setTodoReducer,
  setTodoIsEmpty,
  pushTodoReducer,
  setIsTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
