// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import  appSlice from './appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

// Types for TypeScript users
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
