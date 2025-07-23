import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type SearchState = {
  [key: string]: any;
};

// declaring constant size 
const MAX_CACHE_SIZE = 10;


const initialState: SearchState = {
    cache: {},
    order: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        cacheResults:(state,action:PayloadAction<{[key: string]: any}>)=> {
            Object.entries(action.payload).forEach(([key, value]) => {
                if(!state.cache[key]){
                    state.order.push(key);
                }
                state.cache[key] = value;
            });

            while(state.order.length > MAX_CACHE_SIZE){
                const oldestKey = state.order.shift();
                if(oldestKey){
                    delete state.cache[oldestKey];
                }
            }
        },
    }
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;