import axios from "axios";

const useAxios = () => {
  const userToken = localStorage.getItem("userToken") || {};

  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    // baseURL: "https://koseyazisi.onrender.ccom/",
  });

  const axiosData = axios.create({
    // baseURL: "https://koseyazisi.onrender.ccom/",
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

  const axiosWithToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    // baseURL: "https://koseyazisi.onrender.ccom/",
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });

  const axiosWithTokenAndData = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    // baseURL: "http://127.0.0.1:88800/",
    headers: {
      Authorization: `Token ${userToken}`,
      "Content-type": "multipart/form-data",
    },
  });

  return { axiosPublic, axiosData, axiosWithToken, axiosWithTokenAndData };
};

export default useAxios;
