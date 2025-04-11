import { createSlice } from "@reduxjs/toolkit";

const bottomCommentSlice = createSlice({
  name: "bottomComment",

  initialState: {
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail } = bottomCommentSlice.actions;

export default bottomCommentSlice.reducer;
