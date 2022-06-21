import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { registerUser, loginUser } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import env from "react-dotenv";
import {
  FormControl,
  FormLabel,
  Container,
  Text,
  Heading,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

export interface User {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

function SignupPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<User>();
  const handleSubmitUser: SubmitHandler<User> = (data, e) => {
    e?.preventDefault();
    dispatch(loginUser(data));
    return navigate("/");
  };

  return (
    <Flex flexDirection={"column"} h={"320px"} justifyContent={"space-between"}>
      <Heading mb={"30"}>Login</Heading>
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
            Login
          </Button>
        </FormControl>
      </form>
      <Text fontSize="xs">
        don't have an account?
        <span>
          <Link to="/signup"> Signup</Link>
        </span>
      </Text>
    </Flex>
  );
}

export default SignupPage;
