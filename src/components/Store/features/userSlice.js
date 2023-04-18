import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../../utils/fetchUser";

const userInfo = fetchUser();

const initialState = {
  user: userInfo,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
