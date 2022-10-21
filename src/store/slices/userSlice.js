import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  phone: null,
  name: null,
  photo: null,
  token: localStorage.getItem('token'),
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.name = action.payload.name;
      state.photo = action.payload.photo;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.phone = null;
      state.name = null;
      state.photo = null;
      localStorage.removeItem('token');
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;