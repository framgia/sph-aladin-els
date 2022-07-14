import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPasswod from "../pages/ForgotPassword/ResetPasswod";
function Routers() {
  return (
    <Routes>
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<ForgotPassword />} path="/forgot" />
      <Route element={<ResetPasswod />} path="/reset_password" />
      <Route
        path="/"
        element={<PrivateRoute>{/* Private Page */}</PrivateRoute>}
      />
    </Routes>
  );
}

export default Routers;
