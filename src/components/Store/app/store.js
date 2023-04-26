import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";
import newItemReducer from "../features/newItemSlice";
import itemsReducer from "../features/itemsSlice";
import scrollValueReducer from "../features/scrollSlice";
import cartItemReducer from "../features/CartItemSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    newItem: newItemReducer,
    items: itemsReducer,
    scrollValue: scrollValueReducer,
    cartItems: cartItemReducer,
  },
});

export default store;
