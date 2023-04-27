import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  showCart: false,
  cartTotal: 0,
  cartCount: 0,
};

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const exisitingItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (exisitingItem) {
        const newState = state.cartItems.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
        state.cartItems = newState;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },

    setClearCart(state) {
      state.cartItems = [];
    },

    setCartTotal(state, action) {
      state.cartTotal = action.payload;
    },

    setCartCount(state, action) {
      state.cartCount = action.payload;
    },

    setShowCart(state) {
      state.showCart = true;
    },

    hideCart(state) {
      state.showCart = false;
    },
  },
});

export default cartItemSlice.reducer;

export const {
  addItemToCart,
  setClearCart,
  setCartTotal,
  setCartCount,
  setShowCart,
  hideCart,
} = cartItemSlice.actions;
