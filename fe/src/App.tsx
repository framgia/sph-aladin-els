import React from "react";
import {
  Container,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
  Flex,
} from "@chakra-ui/react";

import SignupPage from "./pages/SignUp";
import { userSelect } from "./redux/userSlice";
import { useAppSelector } from "./redux/hooks";
import { BrowserRouter, Link } from "react-router-dom";

import Routers from "./routes/Routers";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const { message, messageType, isSignedIn }: any = useAppSelector(userSelect);
  return (
    <BrowserRouter>
      {message && message.length > 0 && (
        <Alert status={messageType}>
          <AlertIcon />
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}
      {isSignedIn && (
        <Flex>
          <Link to="/quizzes">Quizzes</Link>
          <Link to="admin/quizzes">Admin Quizzes</Link>
        </Flex>
      )}
      <Flex maxW="full" alignItems="center" justifyContent="center" h="800px">
        <Routers />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
