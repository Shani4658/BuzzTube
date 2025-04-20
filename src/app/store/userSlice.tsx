import {createSlice} from '@reduxjs/toolkit';
const userSlice = createSlice({
    name: 'user',
    initialState: {
        isToggle : false,
    },
    reducers: {
        toggle: (state) => {
            state.isToggle = !state.isToggle;
        },
    },
});
export const {toggle} = userSlice.actions;
export default userSlice.reducer;