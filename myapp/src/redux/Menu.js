import { createSlice } from "@reduxjs/toolkit";

export const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    showLogoutPrompt: false,
  },
  reducers: {
    showLogoutPromptReducer: (state, action) => {
      state.showLogoutPrompt = action.payload.showLogoutPrompt;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showLogoutPromptReducer } = MenuSlice.actions;

export default MenuSlice.reducer;
