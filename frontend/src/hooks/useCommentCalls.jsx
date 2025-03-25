import { fetchStart, fetchFail } from "../features/commentSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useCommentCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

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

  return { postComment, putComment, deleteComment };
};

export default useCommentCalls;
