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
import { BrowserRouter } from "react-router-dom";
import Routes from "./app/routes/Routes";
import PrivateRoute from "./app/routes/PrivateRoute";

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
          <Routes />
        </Container>
      </Center>
    </BrowserRouter>
  );
}

export default App;
