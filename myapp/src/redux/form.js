import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    email: "",
    password: "",
    emailIsValid: true,
    passwordIsValid: true,
    formIsValid: false,
  },
  reducers: {
    emailReducer: (state, action) => {
      state.email = action.payload.email;
    },
    passwordReducer: (state, action) => {
      state.password = action.payload.password;
    },
    emailIsValidReducer: (state, action) => {
      state.emailIsValid = action.payload.emailIsValid;
    },
    passwordIsValidReducer: (state, action) => {
      state.passwordIsValid = action.payload.passwordIsValid;
    },
    formIsValidReducer: (state, action) => {
      state.formIsValid = action.payload.formIsValid;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  emailReducer,
  passwordReducer,
  emailIsValidReducer,
  passwordIsValidReducer,
  formIsValidReducer,
} = formSlice.actions;

export default formSlice.reducer;
