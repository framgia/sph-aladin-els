import React from "react";
import {
  Container,
  Center,
  Alert,
  AlertIcon,
<<<<<<< HEAD
  Flex,
=======
>>>>>>> master
  AlertTitle,
} from "@chakra-ui/react";

import "./App.css";

import SignupPage from "./pages/SignUp";
import { userSelect } from "./redux/userSlice";
import { useAppSelector } from "./redux/hooks";
<<<<<<< HEAD
import { BrowserRouter, Link } from "react-router-dom";
import Routers from "./routes/Routers";
=======
import { BrowserRouter } from "react-router-dom";

import Routers from "./routes/Routers";

>>>>>>> master
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const { message, messageType }: any = useAppSelector(userSelect);
  return (
    <BrowserRouter>
<<<<<<< HEAD
      {message && message.length > 0 && (
=======
      {message.length > 0 && (
>>>>>>> master
        <Alert status={messageType}>
          <AlertIcon />
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}
<<<<<<< HEAD
      <Flex>
        <Link to="user-list">User List</Link>
      </Flex>
      <Center h="980px">
        <Container maxW="md" h={"400px"}>
          <Routers />
=======
      <Center h="980px">
        <Container maxW="md" h={"400px"}>

          <Routers />

>>>>>>> master
        </Container>
      </Center>
    </BrowserRouter>
  );
}

export default App;
