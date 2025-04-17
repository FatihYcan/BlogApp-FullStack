import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchStart, fetchFail } from "../features/bottomCommentSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBottomCommentCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

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

  return { postBottomComment, putBottomComment, deleteBottomComment };
};

export default useBottomCommentCalls;
