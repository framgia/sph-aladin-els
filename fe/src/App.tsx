import React from "react";
import {
  Container,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

import "./App.css";

import SignupPage from "./pages/SignUp";
import { userSelect } from "./redux/userSlice";
import { useAppSelector } from "./redux/hooks";
import { BrowserRouter } from "react-router-dom";

import Routers from "./routes/Routers";

import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const { message, messageType }: any = useAppSelector(userSelect);
  return (
    <BrowserRouter>
      {message.length > 0 && (
        <Alert status={messageType}>
          <AlertIcon />
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}
      <Center h="980px">
        <Container maxW="md" h={"400px"}>

          <Routers />

        </Container>
      </Center>
    </BrowserRouter>
  );
}

export default App;
