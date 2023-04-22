import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";
import newItemReducer from "../features/newItemSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    newItem: newItemReducer,
  },
});

export default store;
