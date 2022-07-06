import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import UserList from "../pages/UserLists";
import Dashboard from "../pages/Dashboard";
import Quizzes from "../pages/Quizzes";
import AddQuiz from "../pages/AddQuiz";

function Routers() {
  return (
    <Routes>
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<AddQuiz />} path="/quizzes/new" />
      <Route path="/" element={<Dashboard />}>
        <Route element={<UserList />} path="user-list" />
        <Route element={<Quizzes />} path="quizzes" />
      </Route>
    </Routes>
  );
}

export default Routers;
