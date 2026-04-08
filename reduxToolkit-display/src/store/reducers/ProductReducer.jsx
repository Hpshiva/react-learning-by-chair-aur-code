import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};
export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export default ProductSlice.reducer;

export const { getProduct } = ProductSlice.actions;
