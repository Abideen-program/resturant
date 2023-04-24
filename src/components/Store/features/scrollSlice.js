import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollValue: 0,
};

const scrollValueSlice = createSlice({
  name: "scrollValue",
  initialState,
  reducers: {
    setScrollValue(state, action) {
      state.scrollValue += action.payload;
    },
  },
});

export default scrollValueSlice.reducer;
export const { setScrollValue } = scrollValueSlice.actions;
