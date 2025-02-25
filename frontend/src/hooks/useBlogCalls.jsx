import {
  fetchStart,
  getUserSuccess,
  getSingleUserSuccess,
  getCategorySuccess,
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
      toastSuccessNotify("Kullanıcı güncellenmiştir..");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      if (error.response.data.message.includes("dup key: { username")) {
        toastErrorNotify(
          "Bu username daha önce alınmış. Lütfen başka bir username girin."
        );
      } else if (error.response.data.message.includes("dup key: { email")) {
        toastErrorNotify(
          "Bu email daha önce alınmış. Lütfen başka bir email girin."
        );
      }
      return false;
    }
  };

  const deleteUser = async (user_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/users/${user_id}/`);
      toastSuccessNotify("Kullanıcı silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Admin kendi hesabını silemez.");
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

  const postCategory = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/categories/", data);
      toastSuccessNotify("Kategori eklenmiştir.");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Bu isimli kategori olduğu için eklenememiştir.");
    }
    return false;
  };

  const putCategory = async (category_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/categories/${category_id}`, data);
      toastSuccessNotify("Kategori güncellenmiştir..");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Bu isimli kategori olduğu için güncellenememiştir.");
    }
    return false;
  };

  const deleteCategory = async (category_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/categories/${category_id}/`);
      toastSuccessNotify("Kategori silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Bu kategoriye ait blog olduğu için silinememiştir.");
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

  const putBlog = async (blog_id, blogData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithTokenAndData.put(
        `/blogs/${blog_id}`,
        blogData
      );
      const apiData = data.data;
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
      toastSuccessNotify("Yorum güncellenmiştir..");
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

  return {
    getUsers,
    getSingleUser,
    putUser,
    deleteUser,
    getCategories,
    postCategory,
    putCategory,
    deleteCategory,
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
  };
};

export default useBlogCalls;
