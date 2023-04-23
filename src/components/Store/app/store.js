import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";
import newItemReducer from "../features/newItemSlice";
import itemsReducer from "../features/itemsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    newItem: newItemReducer,
    items: itemsReducer,
  },
});

export default store;
