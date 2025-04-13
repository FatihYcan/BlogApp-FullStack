import axios from "axios";
import getDeviceId from "../helper/Device";

const useAxios = () => {
  const userToken = localStorage.getItem("userToken") || null;
  const deviceId = getDeviceId();

  const axiosPublic = axios.create({
    // baseURL: "https://koseyazisi.onrender.com/",
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      ...(userToken
        ? { Authorization: `Token ${userToken}` }
        : { "x-device-id": deviceId }),
    },
  });

  const axiosData = axios.create({
    // baseURL: "https://koseyazisi.onrender.com/",
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

  const axiosWithToken = axios.create({
    // baseURL: "https://koseyazisi.onrender.com/",
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });

  const axiosWithTokenAndData = axios.create({
    // baseURL: "https://koseyazisi.onrender.com/",
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      Authorization: `Token ${userToken}`,
      "Content-type": "multipart/form-data",
    },
  });

  return { axiosPublic, axiosData, axiosWithToken, axiosWithTokenAndData };
};

export default useAxios;
