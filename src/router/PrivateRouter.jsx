import React from "react";
import { useAuthContext } from "../context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

const PrivateRouter = () => {
  const { currentUer } = useAuthContext();
  return currentUer ? <Outlet /> : <Navigate replace to="/login" />;
};

export default PrivateRouter;
