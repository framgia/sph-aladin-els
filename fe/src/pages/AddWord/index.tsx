import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { addWord } from "../../redux/quizSlice";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { AddWordParams } from "../../redux/quizSlice";
import { useParams } from "react-router-dom";
import { userSelect } from "../../redux/userSlice";
import {
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  Flex,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import { isDisabled } from "@testing-library/user-event/dist/types/utils";

interface AddwordInput {
  question: string;
  choices_attributes: [
    {
      choice: string;
      is_correct: boolean;
    }
  ];
}

function Addword() {
  const [is_checked, setChecked] = useState(false);
  const { control, register, handleSubmit, formState, reset } = useForm();
  const { id } = useParams();
  const toast = useToast();
  const { token } = useAppSelector(userSelect);
  const dispatch = useAppDispatch();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "choices_attributes",
  });

  const handleAddWord = (data: any) => {
    const { question, choices_attributes }: AddwordInput = data;
    const params: AddWordParams = {
      token,
      id,
      question,
      choices_attributes,
    };
    if (question.length > 1) {
      if (choices_attributes.length > 1) {
        dispatch(addWord(params))
          .then((res: any) =>
            toast({
              title: res.payload.data.status.message,
              status: "success",
            })
          )
          .catch((err: any) =>
            toast({
              title: "Question word already exist",
              status: "error",
            })
          );
      } else {
        toast({
          title: "Choice has to be more than one",
          status: "error",
        });
      }
    } else {
      toast({
        title: "add a question please",
        status: "error",
      });
    }
  };

  const resetField = () => {
    reset();
    setChecked(false);
  };

  return (
    <Flex
      h={"700px"}
      maxW="900px"
      justifyContent="start"
      flexDirection="column"
      alignItems="start"
    >
      <Heading mb="7">Create a word</Heading>
      <FormControl w="500px">
        <form onSubmit={handleSubmit(handleAddWord)}>
          <FormLabel htmlFor="question">Question:</FormLabel>
          <Input {...register("question")} type="text" name="question" />
          {fields.map(({ id }, index) => {
            const idx = index + 1;
            return (
              <div key={id}>
                <FormLabel
                  my="3"
                  htmlFor={`choices_attributes.${index}.choice`}
                >{`choice${idx}`}</FormLabel>
                <Input
                  type="text"
                  {...register(`choices_attributes.${index}.choice`)}
                />
                <Flex alignItems="center">
                  <FormLabel my="3" htmlFor={`choices_attributes.${index}`}>
                    Correct
                  </FormLabel>
                  <Checkbox
                    disabled={is_checked}
                    {...register(`choices_attributes.${index}.is_correct`, {
                      onChange: (e) => setChecked(e.target.checked),
                    })}
                  />
                  <Button
                    ml="10"
                    variant="link"
                    colorScheme="red"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    remove
                  </Button>
                </Flex>
              </div>
            );
          })}
          <Flex mt="5" alignItems="center">
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
            <Button
              ml="5"
              colorScheme="blue"
              variant="link"
              type="button"
              onClick={() => append({})}
            >
              New choice
            </Button>
            <Button
              onClick={() => resetField()}
              ml="8"
              colorScheme="red"
              variant="link"
            >
              reset fields
            </Button>
          </Flex>
        </form>
      </FormControl>
    </Flex>
  );
}

export default Addword;
