import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comment",

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

export const { fetchStart, fetchFail } = commentSlice.actions;

export default commentSlice.reducer;
