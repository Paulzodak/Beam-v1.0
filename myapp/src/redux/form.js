import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    email: "",
    password: "",
    fullName: "",
    addTodoIsValid: false,
    emailIsValid: true,
    fullNameIsValid: true,
    passwordVerify: { value: "", state: true },
    passwordIsValid: true,
    formIsValid: false,
    register: false,
    loginAuth: false,
    currentUserID: null,
  },

  reducers: {
    nameReducer: (state, action) => {
      state.fullName = action.payload.fullName;
    },
    emailReducer: (state, action) => {
      state.email = action.payload.email;
    },
    passwordReducer: (state, action) => {
      state.password = action.payload.password;
    },
    fullNameIsValidReducer: (state, action) => {
      state.fullNameIsValid = action.payload.fullNameIsValid;
    },
    passwordVerifyReducer: (state, action) => {
      state.passwordVerify.value = action.payload.passwordVerifyValue;
    },
    passwordStateVerifyReducer: (state, action) => {
      state.passwordVerify.state = action.payload.passwordVerifyState;
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
    registerReducer: (state, action) => {
      state.register = action.payload.register;
    },
    loginAuthReducer: (state, action) => {
      state.loginAuth = action.payload.loginAuth;
    },
    currentUserIDReducer: (state, action) => {
      state.currentUserID = action.payload.currentUserID;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  emailReducer,
  currentUserIDReducer,
  registerReducer,
  loginAuthReducer,
  nameReducer,
  fullNameIsValidReducer,
  passwordReducer,
  emailIsValidReducer,
  passwordIsValidReducer,
  passwordStateVerifyReducer,
  formIsValidReducer,
  passwordVerifyReducer,
} = formSlice.actions;

export default formSlice.reducer;
