import {
  fetchStart,
  getAllBlogSuccess,
  getBlogSuccess,
  getBlogViewSuccess,
  getBlogLikeSuccess,
  getSingleBlogSuccess,
  getAllUserBlogSuccess,
  getUserBlogSuccess,
  fetchFail,
} from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useBlogCalls = () => {
  const { axiosPublic, axiosWithToken, axiosWithTokenAndData } = useAxios();
  const dispatch = useDispatch();

  const getAllBlogs = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      dispatch(getAllBlogSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
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
      dispatch(getBlogViewSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getBlogsLike = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      dispatch(getBlogLikeSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postBlogId = async (blogData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithTokenAndData.post(
        "/blogs/createId/",
        blogData
      );
      const apiData = data.data;
      return apiData;
    } catch (error) {
      dispatch(fetchFail());
      if (error.response.data.message.includes("Only image")) {
        toastErrorNotify(
          "Yalnızca JPEG, JPG, PNG, GIF ve WEBP formatında resim ekleyebilirsiniz."
        );
      }
    }
    return false;
  };

  const postBlog = async (blogData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithTokenAndData.post("/blogs/", blogData);
      const apiData = data.data;
      if (apiData.isPublish === true) {
        toastSuccessNotify("Blog eklenmiştir.");
      } else if (apiData.isPublish === false) {
        toastSuccessNotify(
          "Publish Hayır' olarak seçildiği için, blogunuz 'My Blogs' bölümüne eklenmiştir."
        );
      }
      return true;
    } catch (error) {
      dispatch(fetchFail());
      if (error.response.data.message.includes("Only image")) {
        toastErrorNotify(
          "Yalnızca JPEG, JPG, PNG, GIF ve WEBP formatında resim ekleyebilirsiniz."
        );
      }
      return false;
    }
  };

  const getSingleBlog = async (username, blog_id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/blogs/${username}/${blog_id}/`);
      const apiData = data.data;
      dispatch(getSingleBlogSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const putBlog = async (blog_id, blogData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithTokenAndData.put(
        `/blogs/${blog_id}`,
        blogData
      );
      const apiData = data.new;
      if (apiData.isPublish === true) {
        toastSuccessNotify("Blog güncellenmiştir.");
      } else if (apiData.isPublish === false) {
        toastSuccessNotify(
          "Publish Hayır' olarak seçildiği için, blogunuz 'My Blogs' bölümüne eklenmiştir."
        );
      }
      return true;
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Blog güncellenememiştir.");
      return false;
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
      await axiosWithToken.post(`/blogs/${blog_id}/postLike/`);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getAllUserBlog = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(url);
      const apiData = data.data;
      dispatch(getAllUserBlogSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getUserBlog = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(url);
      const apiData = data.data;
      const details = data.details;
      dispatch(getUserBlogSuccess({ apiData, details }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getAllBlogs,
    getBlogs,
    getBlogsView,
    getBlogsLike,
    postBlogId,
    postBlog,
    getSingleBlog,
    putBlog,
    deleteBlog,
    postBlogLike,
    getAllUserBlog,
    getUserBlog,
  };
};

export default useBlogCalls;
