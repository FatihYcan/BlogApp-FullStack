import {
  fetchStart,
  getContentSuccess,
  fetchFail,
} from "../features/contentSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useContentCalls = () => {
  const { axiosPublic, axiosWithToken, axiosWithTokenAndData } = useAxios();
  const dispatch = useDispatch();

  const getContents = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      dispatch(getContentSuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postContent = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithTokenAndData.post("/contents/", data);
      toastSuccessNotify("İçerik eklenmiştir.");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("İçerik eklenememiştir.");
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
      toastErrorNotify("İçerik güncellenememiştir.");
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

  return {
    getContents,
    postContent,
    putContent,
    deleteContent,
  };
};

export default useContentCalls;
