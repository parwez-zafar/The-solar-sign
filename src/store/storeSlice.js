import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  products: [],
};

const storeSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = storeSlice.actions;
export default storeSlice.reducer;
