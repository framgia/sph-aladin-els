import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCurrentUser, userSelect } from "../../redux/userSlice";
import { Flex, Heading } from "@chakra-ui/react";
import { getQuizzes, quizSelect } from "../../redux/quizSlice";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Quizzes() {
  const { token, current_user } = useAppSelector(userSelect);
  const { quizzes } = useAppSelector(quizSelect);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getQuizzes(token));
    dispatch(getCurrentUser(token));
  }, [token]);
  return (
    <>
      {current_user?.is_admin && <Link to="new/">Add quiz</Link>}
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
