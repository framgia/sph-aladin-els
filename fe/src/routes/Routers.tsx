import React from "react";
import { Route, Routes } from "react-router-dom";
import SignupPage from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

function Routers() {
  return (
    <Routes>
      <Route element={<SignupPage />} path="/signup" />
      <Route
        path="/"
        element={<PrivateRoute>{/* Private Page */}</PrivateRoute>}
      />
    </Routes>
  );
}

export default Routers;
