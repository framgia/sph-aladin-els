import React from "react";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  useToast,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userSelect } from "../../redux/userSlice";
import { editQuiz, quizSelect } from "../../redux/quizSlice";
import { useNavigate } from "react-router-dom";
export interface UserEditInputForm {
  title: string;
  description: string;
  id: any;
}

export interface UserEditInputParams {
  title: string;
  description: string;
  token: string;
  id: any;
}

function EditQuiz() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { token } = useAppSelector(userSelect);
  const { TobeEditQuiz, isSuccess, message } = useAppSelector(quizSelect);
  const { title, description, id } = TobeEditQuiz;
  const toast = useToast();
  const { register, handleSubmit } = useForm<UserEditInputForm>({
    defaultValues: {
      title,
      description,
    },
  });
  const handleSubmitUser: SubmitHandler<UserEditInputForm> = (data) => {
    const { title, description } = data;
    const params = {
      title,
      description,
      token,
      id,
    };
    if (data.title.length >= 5 && data.description.length >= 7) {
      dispatch(editQuiz(params));
      toast({
        title: "Quiz Updated!",
        status: "success",
      });
      navigate("/admin/quizzes");
    } else {
      toast({
        title: "Title or descrpition is 7 characters minimum",
        status: "error",
      });
      return;
    }
  };
  return (
    <Flex flexDirection={"column"} h={"320px"} justifyContent={"space-between"}>
      <Heading mb={"30"}>Edit quiz</Heading>
      <form onSubmit={handleSubmit(handleSubmitUser)}>
        <FormControl>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" {...register("title")} type="text" />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Textarea id="description" {...register("description")} />

          <Button mt={5} bg={"blue.800"} color={"white"} type="submit">
            Edit quiz
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
}

export default EditQuiz;
