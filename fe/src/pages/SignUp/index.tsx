import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/userSlice";
<<<<<<< HEAD
import { Link, Navigate } from "react-router-dom";
=======
>>>>>>> master
import {
  FormControl,
  FormLabel,
  Heading,
<<<<<<< HEAD
  Text,
=======
>>>>>>> master
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

export interface User {
  email: string;
  password: string;
}

function SignupPage() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<User>();
  const handleSubmitUser: SubmitHandler<User> = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <Flex flexDirection={"column"} h={"320px"} justifyContent={"space-between"}>
      <Heading mb={"30"}>Register</Heading>
      <form onSubmit={handleSubmit(handleSubmitUser)}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            {...register("email", { required: "email is required" })}
            type="email"
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            {...register("password", { required: "password is required" })}
            type="password"
          />
          <Button mt={5} bg={"blue.800"} color={"white"} type="submit">
            Register
          </Button>
        </FormControl>
      </form>
<<<<<<< HEAD
      <Text mt={5} fontSize="xs">
        already have an account?
        <span>
          <Link to="/login"> Login</Link>
        </span>
      </Text>
=======
>>>>>>> master
    </Flex>
  );
}

export default SignupPage;
