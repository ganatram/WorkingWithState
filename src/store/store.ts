import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: { user: userReducer },
  //name of slice : name of reducer
});

export type RootState = ReturnType<typeof store.getState>;
