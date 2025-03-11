import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    users: [],
    singleUser: {},
    myUser: {},
    allBlogs: [],
    blogs: [],
    viewBlogs: [],
    details: {},
    singleBlog: {},
    likes: [],
    userBlogs: [],
    categories: [],
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

    getBlogSuccess: (state, { payload }) => {
      state.blogs = payload.apiData;
      state.details = payload.details;
      state.loading = false;
      state.error = false;
    },

    getAllBlogSuccess: (state, { payload }) => {
      state.allBlogs = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    getBlogViewSuccess: (state, { payload }) => {
      state.viewBlogs = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    getSingleBlogSuccess: (state, { payload }) => {
      state.singleBlog = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    postBlogLikeSuccess: (state, { payload }) => {
      state.likes = payload.likes;
      state.loading = false;
      state.error = false;
    },

    getUserBlogSuccess: (state, { payload }) => {
      state.userBlogs = payload.apiData;
      state.details = payload.details;
      state.loading = false;
      state.error = false;
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

export const {
  fetchStart,
  getUserSuccess,
  getSingleUserSuccess,
  putMyUserSuccess,
  getAllBlogSuccess,
  getBlogSuccess,
  getBlogViewSuccess,
  getSingleBlogSuccess,
  postBlogLikeSuccess,
  getUserBlogSuccess,
  getCategorySuccess,
  fetchFail,
} = blogSlice.actions;

export default blogSlice.reducer;
