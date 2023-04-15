import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlide';
export default configureStore({
   reducer: {
      user: userReducer,
   },
});
// export default userSlide.reducer;
