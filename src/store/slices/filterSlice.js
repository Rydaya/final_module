import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 'all',
  sort: {
    name: 'умолчанию',
    sortProperty: 'all',
  },
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearchValue(state, action) {
      console.log(state.searchValue); 
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
