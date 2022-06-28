import React from "react";
import {
  Container,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  Flex,
} from "@chakra-ui/react";

import "./App.css";

import SignupPage from "./pages/SignUp";
import { userSelect } from "./redux/userSlice";
import { useAppSelector } from "./redux/hooks";
import { BrowserRouter, Link } from "react-router-dom";

import Routers from "./routes/Routers";
import PrivateRoute from "./routes/PrivateRoute";

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
      <Flex>
        <Link to="/quizzes">Quizzes</Link>
      </Flex>

      <Flex maxW="full" alignItems="center" justifyContent="center" h="800px">
        <Routers />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
