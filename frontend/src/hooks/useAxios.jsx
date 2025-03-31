import axios from "axios";

const useAxios = () => {
  const userToken = localStorage.getItem("userToken") || {};

  const axiosPublic = axios.create({
    baseURL: "https://koseyazisi.onrender.com/",
  });

  const axiosData = axios.create({
    baseURL: "https://koseyazisi.onrender.com/",
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

  const axiosWithToken = axios.create({
    baseURL: "https://koseyazisi.onrender.com/",
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });

  const axiosWithTokenAndData = axios.create({
    baseURL: "https://koseyazisi.onrender.com/",
    headers: {
      Authorization: `Token ${userToken}`,
      "Content-type": "multipart/form-data",
    },
  });

  return { axiosPublic, axiosData, axiosWithToken, axiosWithTokenAndData };
};

export default useAxios;
