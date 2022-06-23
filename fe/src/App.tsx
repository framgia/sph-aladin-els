import React from "react";
import {
  Container,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

import "./App.css";
import SignupPage from "./app/pages/SignUp";
import { userSelect } from "./app/redux/userSlice";
import { useAppSelector } from "./app/redux/hooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./app/routes/PrivateRoute";
import LoginPage from "./app/pages/Login";
import Testing from "./app/Testing";
import DashBoardPage from "./app/pages/DashBoardPage";

function App() {
  const { message, messageType }: any = useAppSelector(userSelect);
  return (
    <BrowserRouter>
      {message && message.length > 0 && (
        <Alert status={messageType}>
          <AlertIcon />
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}
      <Center h="980px">
        <Container maxW="md" h={"400px"}>
          <Routes>
            <Route element={<SignupPage />} path="/signup" />
            <Route element={<LoginPage />} path="/login" />
            <Route path="/" element={<DashBoardPage />} />
          </Routes>
        </Container>
      </Center>
    </BrowserRouter>
  );
}

export default App;
