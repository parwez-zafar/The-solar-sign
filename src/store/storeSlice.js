import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  products: [],
  productDetails: {},
  cart: []
};

const storeSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getProductDetails: (state, action) => {
      state.productDetails = action.payload
    },
    getCart: (state, action) => {
      state.cart = action.payload;
    }
  },
});

export const { getProducts, getProductDetails, getCart } = storeSlice.actions;
export default storeSlice.reducer;
