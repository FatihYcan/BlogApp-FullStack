import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    users: [],
    singleUser: {},
    myUser: {},
    details: {},
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },

    getUserSuccess: (state, { payload }) => {
      state.users = payload.apiData;
      state.details = payload.details;
      state.loading = false;
      state.error = false;
    },

    getSingleUserSuccess: (state, { payload }) => {
      state.singleUser = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    putMyUserSuccess: (state, { payload }) => {
      state.myUser = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getUserSuccess,
  getSingleUserSuccess,
  putMyUserSuccess,
  fetchFail,
} = userSlice.actions;

export default userSlice.reducer;
