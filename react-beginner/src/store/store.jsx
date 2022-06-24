import { configureStore } from '@reduxjs/toolkit';
import clipReducer from './cilpSlice';

const store = configureStore({
  reducer: { clip: clipReducer },
});

export default store;
