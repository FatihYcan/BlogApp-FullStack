import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",

  initialState: {
    contents: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },

    getContentSuccess: (state, { payload }) => {
      state.contents = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getContentSuccess, fetchFail } = contentSlice.actions;

export default contentSlice.reducer;
