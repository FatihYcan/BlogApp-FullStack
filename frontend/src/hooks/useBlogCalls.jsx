import {
  fetchStart,
  getBlogSuccess,
  getLikeSuccess,
  getCategorySuccess,
  getDetailSuccess,
  getUserSuccess,
  fetchFail,
} from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useBlogCalls = () => {
  const { axiosWithToken, axiosPublic } = useAxios();
  const dispatch = useDispatch();

  const getBlogs = async (url) => {
    // dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data.filter(
        (blog) => blog._id !== "67111b9f3ec8b710e80612f0"
      );
      const pagination = data.details;
      dispatch(getBlogSuccess({ apiData, pagination }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const blogBlogs = async (blogData) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.blog("/blogs/", blogData);
      toastSuccessNotify("Blog kaydı eklenmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog kaydı eklenemiştir.");
    }
  };

  const putBlogs = async (blog_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/blogs/${blog_id}`, data);
      toastSuccessNotify("Blog kaydı güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog kaydı güncellenememiştir.");
    }
  };

  const deleteBlogs = async (blog_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/blogs/${blog_id}/`);
      toastSuccessNotify("Blog silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog silinemedi");
    }
  };

  const getCategories = async (url) => {
    const { data } = await axiosWithToken(`/${url}/`);
    const apiData = data.data;
    dispatch(getCategorySuccess({ apiData, url }));
  };

  const blogLikes = async (url, blog_id) => {
    try {
      const { data } = await axiosWithToken.blog(
        `/${url}/${blog_id}/blogLike/`,
        null
      );
      dispatch(getLikeSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getDetails = async (blog) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs/${blog.id}/`);
      const apiData = data.data;
      dispatch(getDetailSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getUsers = async (user) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs?author=${user.id}`);
      const apiData = data.data;
      const pagination = data.details;
      dispatch(getUserSuccess({ apiData, pagination }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const blogComments = async (url, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.blog(`/${url}/`, data);
      toastSuccessNotify("Yorum yapılmıştır.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login olmadığınız için yorum yapılamamıştır");
    }
  };

  const putComments = async (blog_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/comments/${blog_id}`, data);
      toastSuccessNotify("Yorum güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yorum güncellenememiştir.");
    }
  };

  const deleteComments = async (blog_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/comments/${blog_id}/`);
      toastSuccessNotify("Yorum silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yorum silinememiştir");
    }
  };

  return {
    getBlogs,
    blogBlogs,
    putBlogs,
    deleteBlogs,
    getCategories,
    blogLikes,
    getDetails,
    getUsers,
    blogComments,
    putComments,
    deleteComments,
  };
};

export default useBlogCalls;
