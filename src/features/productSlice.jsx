import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    title: "Product 1",
    price: "Rp10000",
  },
  reducers: {
    updates: (state, action) => {
      state.title = action.payload.title;
      state.price = action.payload.price;
    },
  },
});

export const { updates } = productSlice.actions;
export default productSlice.reducer;
