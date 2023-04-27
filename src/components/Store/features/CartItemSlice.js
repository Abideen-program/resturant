import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "../../../utils/fetchUser";

const cartInfo = fetchItems()

const initialState = {
  cartItems: cartInfo,
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

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItemFromCart(state, action) {
      const exisitingItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      if (exisitingItem.quantity === 1) {
        const newCartItems = state.cartItems.filter((item) => {
          return item.id !== action.payload.id;
        });

        state.cartItems = newCartItems;
      } else {
        const newCartItems = state.cartItems.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });

        state.cartItems = newCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    setClearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
  removeItemFromCart,
  setClearCart,
  setCartTotal,
  setCartCount,
  setShowCart,
  hideCart,
} = cartItemSlice.actions;
