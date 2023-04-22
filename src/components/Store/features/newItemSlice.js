import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  calories: "",
  price: "",
  category: null,
  imageAsset: null,
  field: false,
  alertStatus: "danger",
  message: null,
  isLoading: false,
};

const newItemSlice = createSlice({
  name: "newItem",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setCalories(state, action) {
      state.calories = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setImageAsset(state, action) {
      state.imageAsset = action.payload;
    },
    setField(state, action) {
      state.field = action.payload;
    },
    setAlertStatus(state, action) {
      state.alertStatus = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export default newItemSlice.reducer;

export const {
  setTitle,
  setCalories,
  setPrice,
  setCategory,
  setImageAsset,
  setField,
  setAlertStatus,
  setMessage,
  setLoading,
} = newItemSlice.actions;
