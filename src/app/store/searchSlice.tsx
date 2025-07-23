import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchCacheValue = unknown; // Replace 'unknown' with a specific type if you know it

interface SearchState {
  cache: { [key: string]: SearchCacheValue };
  order: string[];
}

const MAX_CACHE_SIZE = 10;

const initialState: SearchState = {
  cache: {},
  order: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    cacheResults: (
      state,
      action: PayloadAction<{ [key: string]: SearchCacheValue }>
    ) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        if (!state.cache[key]) {
          state.order.push(key);
        }
        state.cache[key] = value;
      });

      while (state.order.length > MAX_CACHE_SIZE) {
        const oldestKey = state.order.shift();
        if (oldestKey) {
          delete state.cache[oldestKey];
        }
      }
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;