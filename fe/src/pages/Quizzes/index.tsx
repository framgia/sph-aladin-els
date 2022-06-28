import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userSelect } from "../../redux/userSlice";
import { Flex, Heading } from "@chakra-ui/react";
import { getQuizzes, quizSelect } from "../../redux/quizSlice";

function Quizzes() {
  const { token } = useAppSelector(userSelect);
  const { quizzes } = useAppSelector(quizSelect);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getQuizzes(token));
  }, [token]);

  return (
    <>
      <Heading my="6" ml="32">
        Quizzes
      </Heading>
      <Flex
        h={"600px"}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {quizzes.map(({ id, title, description }) => (
          <Card key={id} title={title} description={description} />
        ))}
      </Flex>
    </>
  );
}

export default Quizzes;
