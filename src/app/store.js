import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../store/posts/reducer'
import commentReducer from '../store/comments/reducer'
export const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
  },
});