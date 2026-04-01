// src/app/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
console.log('Store создается');
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
