import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { _id } = userInfo || {};

  return _id ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;
