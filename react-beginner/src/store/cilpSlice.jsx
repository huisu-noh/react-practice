import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  unCliped: false,
};

export const clipSlice = createSlice({
  name: 'clip',
  initialState,
  reducers: {
    isCliped: (state) => {
      state.unCliped = !unCliped;
    },
  },
});

// Action creators are generated for each case reducer function
export const { isCliped } = clipSlice.actions;

export default clipSlice.reducer;
