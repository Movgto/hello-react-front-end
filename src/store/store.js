import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from '../redux/slices/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsSlice,
  },
});

export default store;
