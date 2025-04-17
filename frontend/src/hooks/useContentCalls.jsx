import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchStart, fetchFail } from "../features/contentSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useContentCalls = () => {
  const { axiosWithToken, axiosWithTokenAndData } = useAxios();
  const dispatch = useDispatch();

  const postContent = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithTokenAndData.post("/contents/", data);
      toastSuccessNotify("İçerik eklenmiştir.");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      if (error.response.data.message.includes("Only image")) {
        toastErrorNotify(
          "Yalnızca JPEG, JPG, PNG, GIF ve WEBP formatında resim ekleyebilirsiniz."
        );
      } else {
        toastErrorNotify("İçerik eklenememiştir.");
      }
    }
    return false;
  };

  const putContent = async (content_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithTokenAndData.put(`/contents/${content_id}`, data);
      toastSuccessNotify("İçerik güncellenmiştir..");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      if (error.response.data.message.includes("Only image")) {
        toastErrorNotify(
          "Yalnızca JPEG, JPG, PNG, GIF ve WEBP formatında resim ekleyebilirsiniz."
        );
      } else {
        toastErrorNotify("İçerik güncellenememiştir.");
      }
    }
    return false;
  };

  const deleteContent = async (content_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/contents/${content_id}/`);
      toastSuccessNotify("İçerik silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("İçerik silinememiştir.");
    }
  };

  return { postContent, putContent, deleteContent };
};

export default useContentCalls;
