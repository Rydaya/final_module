import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.js';
import modal from './slices/modalSlice.js';
import cart from './slices/cartSlice.js';
import products from './slices/productsSlice.js';
import pagination from './slices/paginationSlice.js';
import user from './slices/userSlice.js';

export const store = configureStore({
  reducer: {
    filter,
    modal,
    cart,
    products,
    pagination,
    user,
  },
});
