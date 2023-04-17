import { createSlice } from '@reduxjs/toolkit';

export const userSlide = createSlice({
   name: 'user',
   initialState: {
      name: 'CuLee hi',
      age: '23',
      about: 'I am a software engineer',
      avatarUrl:
         'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
      themeColor: 'ff9051',
      pending: false,
      error: false,
   },
   reducers: {
      updateStart: (state) => {
         state.pending = true;
      },

      updateError: (state) => {
         state.pending = false;
         state.error = true;
      },

      updateSuccess: (state, action) => {
         state.pending = false;
         state.error = false;
         state.name = action.payload.name;
         state.age = action.payload.age;
         state.about = action.payload.about;
         state.avatarUrl = action.payload.avatarUrl;
         state.themeColor = action.payload.themeColor;
      },
   },
});

export const { updateError, updateStart, updateSuccess } = userSlide.actions;
export default userSlide.reducer;
