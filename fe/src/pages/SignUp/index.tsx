import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/userSlice";
import { Link, Navigate } from "react-router-dom";
import { User } from "../Login";
import {
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

const SignupPage = () => {
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
      <Text mt={5} fontSize="xs">
        already have an account?
        <span>
          <Link to="/login"> Login</Link>
        </span>
      </Text>
    </Flex>
  );
};

export default SignupPage;
