import { createSlice } from "@reduxjs/toolkit";

export const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    showLogoutPrompt: false,
    errorModal: {
      show: false,
      message: "",
    },
    deleteTodoPrompt: false,
    deleteId: 45,
    loaderModal: false,
    appReady: false,
    users: [{}],
  },
  reducers: {
    showLogoutPromptReducer: (state, action) => {
      state.showLogoutPrompt = action.payload.showLogoutPrompt;
    },
    showErrorModalReducer: (state, action) => {
      state.errorModal.show = action.payload.show;
      state.errorModal.message = action.payload.message;
    },
    deleteTodoPromptReducer: (state, action) => {
      state.deleteTodoPrompt = action.payload.deleteTodoPrompt;
    },
    deleteIdReducer: (state, action) => {
      state.deleteId = action.payload.deleteId;
    },
    setLoaderModal: (state, action) => {
      state.loaderModal = action.payload.loaderModal;
    },
    setAppReady: (state, action) => {
      state.appReady = action.payload.appReady;
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUsers,
  setAppReady,
  setLoaderModal,
  deleteIdReducer,
  deleteTodoPromptReducer,
  showLogoutPromptReducer,
  showErrorModalReducer,
} = MenuSlice.actions;

export default MenuSlice.reducer;
