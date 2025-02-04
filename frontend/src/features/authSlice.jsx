import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  token: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  image: "",
  isActive: true,
  isAdmin: false,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    registerSuccess: (state, { payload }) => {
      state.userId = payload?.data?._id;
      state.token = payload?.token;
      state.username = payload?.data?.username;
      state.firstName = payload?.data?.firstName;
      state.lastName = payload?.data?.lastName;
      state.email = payload?.data?.email;
      state.image = payload?.data?.image;
      state.isActive = payload?.data?.isActive;
      state.isAdmin = payload?.data?.isAdmin;
      state.loading = false;
    },

    loginSuccess: (state, { payload }) => {
      state.userId = payload?.user?._id;
      state.token = payload?.token;
      state.username = payload?.user?.username;
      state.firstName = payload?.user?.firstName;
      state.lastName = payload?.user?.lastName;
      state.email = payload?.user?.email;
      state.image = payload?.user?.image;
      state.isActive = payload?.user?.isActive;
      state.isAdmin = payload?.user?.isAdmin;
      state.loading = false;
    },

    logoutSuccess: (state) => {
      state.userId = "";
      state.token = "";
      state.username = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
      state.isActive = false;
      state.isAdmin = false;
      state.loading = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  fetchFail,
} = authSlice.actions;

export default authSlice.reducer;
