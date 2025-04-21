import {createSlice} from '@reduxjs/toolkit';
const appSlice = createSlice({
    name: 'user',
    initialState: {
        isMenuOpen : true,
    },
    reducers: {
        toggle: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});
export const {toggle} = appSlice.actions;
export default appSlice.reducer;