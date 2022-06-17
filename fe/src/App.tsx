import React from "react";
import {
  Container,
  Center,
  Alert,
  AlertIcon,
<<<<<<< HEAD
=======
  Flex,
>>>>>>> 1aee8e4 (fix merge conflict)
  AlertTitle,
} from "@chakra-ui/react";

import "./App.css";

import SignupPage from "./pages/SignUp";
import { userSelect } from "./redux/userSlice";
import { useAppSelector } from "./redux/hooks";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD

import Routers from "./routes/Routers";

=======
import Routes from "./routes/Routes";
>>>>>>> d71ebee (Fix/file structure (#12))
=======

import Routers from "./routes/Routers";

>>>>>>> 8275fda (Fix/file structure (#13))
=======
import { BrowserRouter, Link } from "react-router-dom";
import Routers from "./routes/Routers";
>>>>>>> 1aee8e4 (fix merge conflict)
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const { message, messageType }: any = useAppSelector(userSelect);
  return (
    <BrowserRouter>
      {message && message.length > 0 && (
<<<<<<< HEAD
=======
      {message.length > 0 && (
>>>>>>> d71ebee (Fix/file structure (#12))
=======
>>>>>>> 1aee8e4 (fix merge conflict)
        <Alert status={messageType}>
          <AlertIcon />
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}
<<<<<<< HEAD
=======
      <Flex>
        <Link to="user-list">User List</Link>
      </Flex>
>>>>>>> 1aee8e4 (fix merge conflict)
      <Center h="980px">
        <Container maxW="md" h={"400px"}>
<<<<<<< HEAD
<<<<<<< HEAD
          <Routers />
<<<<<<< HEAD
=======
          <Routes />
>>>>>>> d71ebee (Fix/file structure (#12))
=======

          <Routers />

>>>>>>> 8275fda (Fix/file structure (#13))
=======
>>>>>>> 1aee8e4 (fix merge conflict)
        </Container>
      </Center>
    </BrowserRouter>
  );
}

export default App;
