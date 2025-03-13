import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    allBlogs: [],
    blogs: [],
    viewBlogs: [],
    details: {},
    singleBlog: {},
    likes: [],
    allUserBlogs: [],
    userBlogs: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },

    getAllBlogSuccess: (state, { payload }) => {
      state.allBlogs = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    getBlogSuccess: (state, { payload }) => {
      state.blogs = payload.apiData;
      state.details = payload.details;
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

    getAllUserBlogSuccess: (state, { payload }) => {
      state.allUserBlogs = payload.apiData;
      state.loading = false;
      state.error = false;
    },

    getUserBlogSuccess: (state, { payload }) => {
      state.userBlogs = payload.apiData;
      state.details = payload.details;
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
  getAllBlogSuccess,
  getBlogSuccess,
  getBlogViewSuccess,
  getSingleBlogSuccess,
  postBlogLikeSuccess,
  getAllUserBlogSuccess,
  getUserBlogSuccess,
  fetchFail,
} = blogSlice.actions;

export default blogSlice.reducer;
