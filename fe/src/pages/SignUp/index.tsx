import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/userSlice";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export interface User {
  email: string;
  password: string;
}

export interface registerParams {
  email: string;
  password: string;
  lastname: string;
  username: string;
  firstname: string;
}

function SignupPage() {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<registerParams>();
  const handleSubmitUser: SubmitHandler<registerParams> = (data) => {
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
          <FormLabel htmlFor="lastname">Last name</FormLabel>
          <Input
            id="lastname"
            {...register("lastname", { required: "lastname is required" })}
            type="text"
          />
          <FormLabel htmlFor="firstname">First name</FormLabel>
          <Input
            id="firstname"
            {...register("firstname", { required: "first name is required" })}
            type="text"
          />
          <FormLabel htmlFor="username">User name</FormLabel>
          <Input
            id="User name"
            {...register("username", { required: "user name is required" })}
            type="text"
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
        <Flex flexDirection={"column"}>
          <Text fontSize="xs" my={5}>
            Already have an account? |
            <span>
              <Link to="/login">Login</Link>
            </span>
          </Text>
        </Flex>
      </form>
    </Flex>
  );
}

export default SignupPage;
