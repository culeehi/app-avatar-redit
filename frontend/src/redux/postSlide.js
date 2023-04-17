import { createSlice } from '@reduxjs/toolkit';

export const postSlide = createSlice({
   name: 'post',
   initialState: {
      posts: [
         {
            title: '',
            tag: 0,
            description: '',
         },
      ],
   },
   reducers: {
      createPost: (state, action) => {
         state.posts = [...state.posts, action.payload];
      },
   },
});

export const { createPost } = postSlide.actions;
export default postSlide.reducer;
