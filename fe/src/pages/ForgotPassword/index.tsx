import React from "react";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { forgotPassword } from "../../redux/userSlice";
import { User } from "../Login";
import { useAppDispatch } from "../../redux/hooks";

function ForgotPassword() {
  const { register, handleSubmit } = useForm<User>();
  const dispatch = useAppDispatch();
  const handleSubmitUser: SubmitHandler<User> = (data, e) => {
    const { email }: any = data;
    dispatch(forgotPassword(email));
  };
  return (
    <Flex flexDirection={"column"} h={"320px"} justifyContent={"space-between"}>
      <Heading mb={"30"}>Forgot password</Heading>
      <form onSubmit={handleSubmit(handleSubmitUser)}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            {...register("email", { required: "email is required" })}
            type="email"
          />

          <Button mt={5} bg={"blue.800"} color={"white"} type="submit">
            Send email
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
}

export default ForgotPassword;
