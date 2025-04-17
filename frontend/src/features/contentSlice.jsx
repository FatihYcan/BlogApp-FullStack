import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",

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

export const { fetchStart, fetchFail } = contentSlice.actions;

export default contentSlice.reducer;
