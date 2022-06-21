import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword, userSelect } from "../../redux/userSlice";
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
  const dispatch = useAppDispatch();
  const { isSuccess }: any = useAppSelector(userSelect);
  const { register, handleSubmit, reset } = useForm<User>();
  const handleSubmitUser: SubmitHandler<User> = (data, e) => {
    e?.preventDefault();
    dispatch(resetPassword(data));
    isSuccess && reset();
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
            type="password"
          />
          <Button mt={5} bg={"blue.800"} color={"white"} type="submit">
            Reset Password
          </Button>
        </FormControl>
      </form>
      {isSuccess ? (
        <Text fontSize="xs" mt={"5"}>
          <Link to="/"> Login</Link>
        </Text>
      ) : (
        <Text fontSize="xs" mt={"5"}>
          <Link to="/forgot"> Generate token </Link>
        </Text>
      )}
    </Flex>
  );
}

export default ResetPasswod;
