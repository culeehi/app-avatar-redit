import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlide';
import postReducer from './postSlide';
export default configureStore({
   reducer: {
      user: userReducer,
      post: postReducer,
   },
});
