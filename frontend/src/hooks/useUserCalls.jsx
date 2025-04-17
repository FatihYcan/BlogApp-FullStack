import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchStart,
  getUserSuccess,
  getSingleUserSuccess,
  putMyUserSuccess,
  fetchFail,
} from "../features/userSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useUserCalls = () => {
  const { axiosWithToken, axiosWithTokenAndData } = useAxios();
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

  const putMyUser = async (user_id, userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithTokenAndData.put(
        `/users/${user_id}`,
        userData
      );
      const apiData = data.new;
      localStorage.setItem("userInfo", JSON.stringify(apiData));
      dispatch(putMyUserSuccess({ apiData }));
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

  return { getUsers, getSingleUser, putUser, putMyUser, deleteUser };
};

export default useUserCalls;
