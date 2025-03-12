import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",

  initialState: {
    categories: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },

    getCategorySuccess: (state, { payload }) => {
      state.categories = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getCategorySuccess, fetchFail } = categorySlice.actions;

export default categorySlice.reducer;
