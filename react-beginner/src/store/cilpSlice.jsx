import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'CLIP',
  clip: false,
};

export const clipSlice = createSlice({
  name: 'clip',
  initialState,
  reducers: {
    addClip: (state) => {
      state.name = 'CLIP';
      state.clip = false;
    },
    removeClip: (state) => {
      state.name = 'UNCLIP';
      state.clip = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const ClipActions = clipSlice.actions;

export default clipSlice.reducer;
