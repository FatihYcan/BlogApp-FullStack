import {
  fetchStart,
  getUserSuccess,
  getSingleUserSuccess,
  getBlogSuccess,
  getBlogViewSuccess,
  getSingleBlogSuccess,
  postBlogLikeSuccess,
  getUserBlogSuccess,
  getCategorySuccess,
  fetchFail,
} from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useBlogCalls = () => {
  const { axiosWithToken, axiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getUsers = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(url);
      const apiData = data.data;
      dispatch(getUserSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getSingleUser = async (user) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/users/${user.id}/`);
      const apiData = data.data;
      dispatch(getSingleUserSuccess({ apiData }));
    } catch (error) {}
  };

  const putUser = async (user, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/users/${user.id}`, data);
      toastSuccessNotify("User kaydı güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("User kaydı güncellenememiştir.");
    }
  };

  const getBlogs = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      const detail = data.detail;
      dispatch(getBlogSuccess({ apiData, detail }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getBlogsView = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      const detail = data.detail;
      dispatch(getBlogViewSuccess({ apiData, detail }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postBlog = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/blogs/", data);
      toastSuccessNotify("Blog kaydı eklenmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog kaydı eklenemiştir.");
    }
  };

  const getSingleBlog = async (blog) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs/${blog.id}/`);
      const apiData = data.data;
      dispatch(getSingleBlogSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const putBlog = async (blog, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/blogs/${blog.id}`, data);
      toastSuccessNotify("Blog kaydı güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog kaydı güncellenememiştir.");
    }
  };

  const deleteBlog = async (blog) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/blogs/${blog.id}/`);
      toastSuccessNotify("Blog silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog silinememiştir");
    }
  };

  const postBlogLike = async (blog) => {
    try {
      const { data } = await axiosWithToken.post(`/blogs/${blog.id}/postLike/`);
      dispatch(postBlogLikeSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getUserBlog = async (user) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs?author=${user.id}`);
      const apiData = data.data;
      const detail = data.detail;
      dispatch(getUserBlogSuccess({ apiData, detail }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postComments = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/blogs/", data);
      toastSuccessNotify("Yorum yapılmıştır.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login olmadığınız için yorum yapılamamıştır");
    }
  };

  const putComments = async (blog, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/comments/${blog.id}`, data);
      toastSuccessNotify("Yorum güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yorum güncellenememiştir.");
    }
  };

  const deleteComments = async (blog) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/comments/${blog.id}/`);
      toastSuccessNotify("Yorum silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yorum silinememiştir");
    }
  };

  const getCategories = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(url);
      const apiData = data.data;
      dispatch(getCategorySuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getUsers,
    getSingleUser,
    putUser,
    getBlogs,
    getBlogsView,
    postBlog,
    getSingleBlog,
    putBlog,
    deleteBlog,
    postBlogLike,
    getUserBlog,
    postComments,
    putComments,
    deleteComments,
    getCategories,
  };
};

export default useBlogCalls;
