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
  const { axiosPublic, axiosData, axiosWithToken, axiosWithTokenAndData } =
    useAxios();
  const dispatch = useDispatch();

  const getUsers = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(url);
      const apiData = data.data;
      const details = data.details;
      dispatch(getUserSuccess({ apiData, details }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getSingleUser = async (user_id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/users/${user_id}/`);
      const apiData = data.data;
      dispatch(getSingleUserSuccess({ apiData }));
    } catch (error) {}
  };

  const putUser = async (user_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithTokenAndData.put(`/users/${user_id}`, data);
      toastSuccessNotify("User kaydı güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("User kaydı güncellenememiştir.");
    }
  };

  const deleteUser = async (user_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/users/${user_id}/`);
      toastSuccessNotify("User silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("User silinememiştir");
    }
  };

  const getBlogs = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      const details = data.details;
      dispatch(getBlogSuccess({ apiData, details }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getBlogsView = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      const details = data.details;
      dispatch(getBlogViewSuccess({ apiData, details }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postBlog = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithTokenAndData.post("/blogs/", data);
      toastSuccessNotify("Blog kaydı eklenmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog kaydı eklenemiştir.");
    }
  };

  const getSingleBlog = async (blog_id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/blogs/${blog_id}/`);
      const apiData = data.data;
      dispatch(getSingleBlogSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const putBlog = async (blog_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithTokenAndData.put(`/blogs/${blog_id}`, data);
      toastSuccessNotify("Blog kaydı güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog kaydı güncellenememiştir.");
    }
  };

  const deleteBlog = async (blog_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/blogs/${blog_id}/`);
      toastSuccessNotify("Blog silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog silinememiştir");
    }
  };

  const postBlogLike = async (blog_id) => {
    try {
      const { data } = await axiosWithToken.post(
        `/blogs/${blog_id}/postLike/`
      );
      dispatch(postBlogLikeSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getUserBlog = async (user_id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs?author=${user_id}`);
      const apiData = data.data;
      const details = data.details;
      dispatch(getUserBlogSuccess({ apiData, details }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postComments = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/comments/", data);
      toastSuccessNotify("Yorum yapılmıştır.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login olmadığınız için yorum yapılamamıştır");
    }
  };

  const putComments = async (comment_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/comments/${comment_id}`, data);
      toastSuccessNotify("Yorum güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yorum güncellenememiştir.");
    }
  };

  const deleteComments = async (comment_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/comments/${comment_id}/`);
      toastSuccessNotify("Yorum silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yorum silinememiştir");
    }
  };

  const getCategories = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      dispatch(getCategorySuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postCategories = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/categories/", data);
      toastSuccessNotify("Category eklenmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Category eklenememiştir.");
    }
  };

  const putCategories = async (category_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/categories/${category_id}`, data);
      toastSuccessNotify("Category güncellenmiştir..");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Category güncellenememiştir.");
    }
  };

  const deleteCategories = async (category_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/categories/${category_id}/`);
      toastSuccessNotify("Category silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Category silinememiştir");
    }
  };

  return {
    getUsers,
    getSingleUser,
    putUser,
    deleteUser,
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
    postCategories,
    putCategories,
    deleteCategories,
  };
};

export default useBlogCalls;
