import React from "react";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { forgotPassword } from "../../redux/userSlice";
import { User } from "../Login";
import { userSelect } from "../../redux/userSlice";
import { useAppDispatch } from "../../redux/hooks";

const ForgotPassword = () => {
  const { message, messageType, isFetching, isSuccess }: any =
    useAppSelector(userSelect);
  const { register, handleSubmit } = useForm<User>();
  const navigate = useNavigate();
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

          <Button
            mt={5}
            bg={isFetching ? "gray.300" : "blue.800"}
            color={"white"}
            type="submit"
          >
            Send email
          </Button>
        </FormControl>
      </form>
      {isSuccess && (
        <Text fontSize="xs">
          <Link to="/reset_password"> Reset password</Link>
        </Text>
      )}
    </Flex>
  );
};

export default ForgotPassword;
