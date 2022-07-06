import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addQuiz } from "../../redux/quizSlice";
import {
  FormControl,
  FormLabel,
  useToast,
  Heading,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { userSelect } from "../../redux/userSlice";

interface QuizInput {
  title: string;
  description: string;
}

function AddQuiz() {
  const dispatch = useAppDispatch();

  const { token } = useAppSelector(userSelect);
  const toast = useToast();
  const { register, handleSubmit } = useForm<QuizInput>();
  const handleAddQuiz: SubmitHandler<QuizInput> = (data, e) => {
    e?.preventDefault();
    const { title, description } = data;
    const params = {
      token,
      title,
      description,
    };
    if (title.length >= 6 && description.length >= 6) {
      dispatch(addQuiz(params));
      toast({
        title: "Quiz Added",
        status: "success",
      });
    } else {
      toast({
        title: "Title and description is minimum of 10 length",
        status: "error",
      });
    }
  };

  return (
    <Flex flexDirection={"column"} h={"320px"} justifyContent={"space-between"}>
      <Heading mb={"30"}>Add quiz</Heading>
      <form onSubmit={handleSubmit(handleAddQuiz)}>
        <FormControl isRequired>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            id="title"
            {...register("title", { required: "title is required" })}
            type="text"
          />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            {...register("description", {
              required: "description is required",
            })}
            type="description"
          />
          <Button mt={5} bg={"blue.800"} color={"white"} type="submit">
            Add this quiz
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
}

export default AddQuiz;
