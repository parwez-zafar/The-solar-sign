import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  products: [],
  productDetails: {}
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
    }
  },
});

export const { getProducts, getProductDetails } = storeSlice.actions;
export default storeSlice.reducer;
