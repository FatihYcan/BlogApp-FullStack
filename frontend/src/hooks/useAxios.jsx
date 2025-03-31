import axios from "axios";

const useAxios = () => {
  const userToken = localStorage.getItem("userToken") || {};

  const axiosPublic = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL}`,
    baseURL: "",
  });

  const axiosData = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL}`,
    baseURL: "",
    headers: {
      "Content-type": "multipart/form-data",
    },
  });

  const axiosWithToken = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL}`,
    baseURL: "",
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });

  const axiosWithTokenAndData = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL}`,
    baseURL: "",
    headers: {
      Authorization: `Token ${userToken}`,
      "Content-type": "multipart/form-data",
    },
  });

  return { axiosPublic, axiosData, axiosWithToken, axiosWithTokenAndData };
};

export default useAxios;
