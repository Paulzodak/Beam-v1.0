import { createSlice } from "@reduxjs/toolkit";
import arrowBackIcon from "../Images/arrowBack.svg";
import moreIcon from "../Images/more.svg";

export const styleSlice = createSlice({
  name: "styles",
  initialState: {
    colors: {
      mainWhite: "#FFFFFF",
      darkBlue: "#505C8C",
      bgGrey: "#F9F9F9",
      darkGrey: "#EEEEEE",
      activeRed: "#EEC2C3",
    },
    fonts: {
      mainFont: "'Open Sans', sans-serif",
    },
    icons: {
      arrowBackIcon: arrowBackIcon,
      moreIcon: moreIcon,
    },
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { incrementByAmount } = styleSlice.actions;

export default styleSlice.reducer;
