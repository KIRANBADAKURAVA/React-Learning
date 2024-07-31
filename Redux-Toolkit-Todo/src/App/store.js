import { configureStore } from '@reduxjs/toolkit';
import xtodoReducer from '../Features/Todo/TodoSlice';

const store = configureStore({
    reducer: {
      todo: xtodoReducer,
    },
  });
  export default store;  