import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredDataLength: '',
  paginationValues: {
    firstContentIndex: '',
    lastContentIndex: '',
  },
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setFilteredDataLength(state, action) {
      state.filteredDataLength = action.payload;
    },
    setPaginationValues(state, action) {
      state.paginationValues.firstContentIndex = action.payload.firstContentIndex;
      state.paginationValues.lastContentIndex = action.payload.lastContentIndex;
    },
  },
});

export const { setFilteredDataLength, setPaginationValues } = paginationSlice.actions;

export default paginationSlice.reducer;
