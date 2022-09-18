import { configureStore } from "@reduxjs/toolkit";
import calender from "./calender";
import counterReducer from "./counter";
import formReducer from "./form";
import styleReducer from "./styles";
import calenderReducer from "./calender";

export default configureStore({
  reducer: {
    counter: counterReducer,
    form: formReducer,
    style: styleReducer,
    calender: calenderReducer,
  },
});