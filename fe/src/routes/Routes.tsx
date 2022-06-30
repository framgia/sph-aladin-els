import React from "react";
import { Route } from "react-router-dom";
import SignupPage from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

function Routes() {
  return (
    <>
      <Route element={<SignupPage />} path="/signup" />
      <Route
        path="/"
        element={<PrivateRoute>{/* Private Page */}</PrivateRoute>}
      />
    </>
  );
}

export default Routes;
