import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    products: [],
    images: [],
    reviews: [],
    users: [],
    orders: {},
    pendingProducts: true,
    pendingImages: true,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    getProductsStart: (state) => {
      state.pendingProducts = true;
    },
    getProductsEnd: (state) => {
      state.pendingProducts = false;
    },
    getImagesStart: (state) => {
      state.pendingImages = true;
    },
    getImagesEnd: (state) => {
      state.pendingImages = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUsers,
  setReviews,
  setProducts,
  setImages,
  setOrders,
  getProductsStart,
  getProductsEnd,
  getImagesStart,
  getImagesEnd,
} = dataSlice.actions;

export default dataSlice.reducer;
