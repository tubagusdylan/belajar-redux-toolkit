import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const response = await axios.get("http://localhost:5000/product");
  return response.data;
});

export const saveProduct = createAsyncThunk("product/saveProduct", async ({ title, price }) => {
  const response = await axios.post("http://localhost:5000/product", {
    title: title,
    price: price,
  });
  return response.data;
});

export const updateProduct = createAsyncThunk("product/updateProduct", async ({ id, title, price }) => {
  const response = await axios.put(`http://localhost:5000/product/${id}`, {
    title: title,
    price: price,
  });
  return response.data;
});

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id) => {
  await axios.delete(`http://localhost:5000/product/${id}`);
  return id;
});

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProduct.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [saveProduct.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
    },
    [deleteProduct.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
    },
    [updateProduct.fulfilled]: (state, action) => {
      productEntity.updateOneOne(state, { id: action.payload.id, updates: action.payload });
    },
  },
});

export const productSelector = productEntity.getSelectors((state) => state.product);
export default productSlice.reducer;
