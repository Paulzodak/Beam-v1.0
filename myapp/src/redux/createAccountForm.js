import { createSlice } from "@reduxjs/toolkit";
export const createAccountSlice = createSlice({
  name: "createAccountForm",
  initialState: {
    fullName: "",
    email: "",
    password: "",
  },
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload.fullName;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    },
  },
});
export const { setEmail, setFullName, setPassword } =
  createAccountSlice.actions;

export default createAccountSlice.reducer;
