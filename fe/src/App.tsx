import React from "react";
import {
  Container,
  Center,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

import "./App.css";
import SignupPage from "./app/components /authentication/SignupPage";
import { userSelect } from "./features/authentication/user";
import { useAppSelector } from "./app/hooks";

function App() {
  const { message, messageType }: any = useAppSelector(userSelect);
  return (
    <>
      {message.length > 0 && (
        <Alert status={messageType}>
          <AlertIcon />
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}
      <Center h="980px">
        <Container maxW="md" h={"400px"}>
          <SignupPage />
        </Container>
      </Center>
    </>
  );
}

export default App;
