import { createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS.js';

const initialState = {
  totalPrice: 0,
  totalItems: 0,
  items: getCartFromLS(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    recountTotalValues(state) {
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      state.totalItems = state.items.reduce((sum, item) => sum + item.count, 0);
    },
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      findItem ? findItem.count++ : state.items.push({ ...action.payload, count: 1 });
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) findItem.count--;
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { recountTotalValues, addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
