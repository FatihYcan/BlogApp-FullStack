import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { axiosPublic, axiosData, axiosWithToken } = useAxios();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosData.post("/users", userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register işlemi başarılı olmuştur.");

      //! Kullanıcı bilgilerini localStorage'e kaydet
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data.data));
      navigate("/");
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

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login", userInfo);
      dispatch(loginSuccess(data));

      //! Kullanıcı bilgilerini localStorage'e kaydet
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userInfo", JSON.stringify(data.user));

      toastSuccessNotify("Login işlemi başarılı olmuştur.");
      navigate("/");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      if (error.response.data.message.includes("User not found")) {
        toastErrorNotify("Kullanıcı bulunamamıştır.");
      } else if (
        error.response.data.message.includes("You entered an invalid password")
      ) {
        toastErrorNotify("Geçersiz bir password girdiniz.");
      } else if (error.response.data.message.includes("User is not active")) {
        toastErrorNotify("Bu kullanıcı aktif değildir.");
      }
      return false;
    }
  };

  const forgotPassword = async (userInfo) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post("/auth/forgot-password", userInfo);
      toastSuccessNotify("Şifre değiştirme işlemi başarılı olmuştur.");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      if (error.response.data.message.includes("User not found")) {
        toastErrorNotify("Kullanıcı bulunamamıştır");
      }
      return false;
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosWithToken("/auth/logout/");
      toastSuccessNotify("Çıkış işlemi başarılı olmuştur.");

      //! Kullanıcı bilgilerini localStorage'den sil
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return { register, login, forgotPassword, logout };
};

export default useAuthCalls;
