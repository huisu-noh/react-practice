import { configureStore } from '@reduxjs/toolkit';
import clipReducer from './cilpSlice';

export const store = configureStore({
  reducer: { clip: clipReducer },
});
