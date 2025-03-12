import {
  fetchStart,
  getAllBlogSuccess,
  getBlogSuccess,
  getBlogViewSuccess,
  getSingleBlogSuccess,
  postBlogLikeSuccess,
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
      const { data } = await axiosWithToken(`/blogs/${username}/${blog_id}/`);
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
      const { data } = await axiosWithToken.post(`/blogs/${blog_id}/postLike/`);
      dispatch(postBlogLikeSuccess(data));
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

  const postComment = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/comments/", data);
      toastSuccessNotify("Yorum yapılmıştır.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login olmadığınız için yorum yapılamamıştır");
    }
  };

  const putComment = async (comment_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/comments/${comment_id}`, data);
      toastSuccessNotify("Yorum güncellenmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yorum güncellenememiştir.");
    }
  };

  const deleteComment = async (comment_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/comments/${comment_id}/`);
      toastSuccessNotify("Yorum silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Yorum silinememiştir");
    }
  };

  const postBottomComment = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/bottomcomments/", data);
      toastSuccessNotify("Cevap verilmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login olmadığınız için cevap verilememiştir.");
    }
  };

  const putBottomComment = async (bottomcomment_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/bottomcomments/${bottomcomment_id}`, data);
      toastSuccessNotify("Cevap güncellenmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Cevap güncellenememiştir.");
    }
  };

  const deleteBottomComment = async (bottomcomment_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/bottomcomments/${bottomcomment_id}/`);
      toastSuccessNotify("Cevap silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Cevap silinememiştir.");
    }
  };

  return {
    getAllBlogs,
    getBlogs,
    getBlogsView,
    postBlog,
    getSingleBlog,
    putBlog,
    deleteBlog,
    postBlogLike,
    getUserBlog,
    postComment,
    putComment,
    deleteComment,
    postBottomComment,
    putBottomComment,
    deleteBottomComment,
  };
};

export default useBlogCalls;
