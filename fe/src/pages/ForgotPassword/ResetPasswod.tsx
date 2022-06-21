import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
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
import { User } from "../Login";

function ResetPasswod() {
  const { register, handleSubmit } = useForm<User>();
  const handleSubmitUser: SubmitHandler<User> = (data, e) => {
    e?.preventDefault();
    console.log(data);
  };
  return (
    <Flex flexDirection={"column"} h={"320px"} justifyContent={"space-between"}>
      <Heading mb={"30"}>Reset password</Heading>
      <form onSubmit={handleSubmit(handleSubmitUser)}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            {...register("email", { required: "email is required" })}
            type="email"
          />
          <FormLabel htmlFor="password">New Password</FormLabel>
          <Input
            id="password"
            {...register("password", { required: "password is required" })}
            type="password"
          />
          <FormLabel htmlFor="token">Token</FormLabel>
          <Input
            id="token"
            {...register("token", { required: "token" })}
            type="text"
          />
          <Button mt={5} bg={"blue.800"} color={"white"} type="submit">
            Reset Password
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
}

export default ResetPasswod;
