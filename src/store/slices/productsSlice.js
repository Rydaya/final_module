import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProductsStatus', async () => {
  const response = await fetch('https://633a0563e02b9b64c60bbf90.mockapi.io/products').then(res => res.json());
  return response;
});

const initialState = {
  currentData: [],
  status: 'loading',
  filteredData: [],
};

const producstSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCurrentData(state, action) {
      state.currentData = action.payload;
    },
    setFilteredData(state, action) {
      state.filteredData = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.currentData = action.payload;
      state.status = 'sucsess';
    },
    [fetchProducts.rejected]: (state) => {
      state.status = 'error';

    },
  },
});

export const { setCurrentData, setFilteredData } = producstSlice.actions;

export default producstSlice.reducer;
