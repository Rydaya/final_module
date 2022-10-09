import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    modalActive: false,
    clickedCard: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalActive(state){
            state.modalActive = !state.modalActive;
        },
        setСlickedCard(state, action){
            state.clickedCard = action.payload;
        }
    }
});

export const { setModalActive, setСlickedCard } = modalSlice.actions;

export default modalSlice.reducer;