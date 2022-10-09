import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice.js';
import modal from './slices/modalSlice.js';

export const store = configureStore({
  reducer: {
    filter,
    modal,
  },
});
