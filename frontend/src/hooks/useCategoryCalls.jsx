import {
  fetchStart,
  getCategorySuccess,
  fetchFail,
} from "../features/categorySlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

const useCategoryCalls = () => {
  const { axiosPublic, axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getCategories = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      dispatch(getCategorySuccess({ apiData }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const postCategory = async (data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/categories/", data);
      toastSuccessNotify("Kategori eklenmiştir.");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Bu isimli kategori olduğu için eklenememiştir.");
    }
    return false;
  };

  const putCategory = async (category_id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/categories/${category_id}`, data);
      toastSuccessNotify("Kategori güncellenmiştir..");
      return true;
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Bu isimli kategori olduğu için güncellenememiştir.");
    }
    return false;
  };

  const deleteCategory = async (category_id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/categories/${category_id}/`);
      toastSuccessNotify("Kategori silinmiştir.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Bu kategoriye ait blog olduğu için silinememiştir.");
    }
  };

  return {
    getCategories,
    postCategory,
    putCategory,
    deleteCategory,
  };
};

export default useCategoryCalls;
