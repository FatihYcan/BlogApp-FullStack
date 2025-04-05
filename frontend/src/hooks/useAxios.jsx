import axios from "axios";
import getDeviceId from "../helper/Device";

const useAxios = () => {
  const userToken = localStorage.getItem("userToken") || {};
  const deviceId = getDeviceId();

  const axiosPublic = axios.create({
    // baseURL: "https://koseyazisi.onrender.com/",
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      "x-device-id": deviceId,
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
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    // baseURL: "https://koseyazisi.onrender.com/",
    headers: {
      Authorization: `Token ${userToken}`,
      "Content-type": "multipart/form-data",
    },
  });

  return { axiosPublic, axiosData, axiosWithToken, axiosWithTokenAndData };
};

export default useAxios;
