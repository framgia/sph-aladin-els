import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import UserList from "../pages/UserLists";

function Routers() {
  return (
    <Routes>
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<UserList />} path="/" />
      <Route path="/" element={<PrivateRoute></PrivateRoute>} />
    </Routes>
  );
}

export default Routers;
