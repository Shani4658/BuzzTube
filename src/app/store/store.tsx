// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import  appSlice from './appSlice';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

// Types for TypeScript users
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
