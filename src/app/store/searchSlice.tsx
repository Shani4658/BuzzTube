import {createSlice} from '@reduxjs/toolkit';
type SearchState = {
  [key: string]: any;
};

const initialState: SearchState = {};
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        cacheResults: (state,action) => {
            state = Object.assign(state, action.payload);
        },
    },
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;