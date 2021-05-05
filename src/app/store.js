import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postReducer from '../store/posts/reducer'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});