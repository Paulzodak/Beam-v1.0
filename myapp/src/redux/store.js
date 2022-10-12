import { configureStore } from "@reduxjs/toolkit";
import calender from "./calender";
import counterReducer from "./counter";
import formReducer from "./form";
import styleReducer from "./styles";
import calenderReducer from "./calender";
import FilterStates from "./FilterStates";
import addTodoForm from "./addTodoForm";
import Todos from "./Todos";
import Menu from "./Menu";

export default configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
    style: styleReducer,
    calender: calenderReducer,
    FilterStates: FilterStates,
    addTodoForm: addTodoForm,
    Todos: Todos,
    Menu: Menu,
  },
});
