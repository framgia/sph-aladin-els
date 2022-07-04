import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userSelect } from "../../redux/userSlice";
import { stringShorten } from "../../utils/stringShorten";
import { addWord } from "../../redux/quizSlice";
import {
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Button,
  Th,
  Text,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { getQuizzes, quizSelect } from "../../redux/quizSlice";
import { useNavigate } from "react-router-dom";

function AdminQuizzes() {
  const { token } = useAppSelector(userSelect);
  const { quizzes } = useAppSelector(quizSelect);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getQuizzes(token));
  }, [token]);

  const handleAddWord = (id: number) => {};

  return (
    <>
      <Flex
        h={"600px"}
        flexWrap="wrap"
        maxW="900px"
        justifyContent="start"
        alignItems="center"
      >
        <Heading>Admin Quizzes</Heading>
        <TableContainer border="1px" borderColor="gray.200" padding="5">
          <Table size="3xl" w="850px" h="400px">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {quizzes.map(({ title, description, id }) => (
                <Tr key={id}>
                  <Td>{title}</Td>
                  <Td>
                    <Text fontSize="sm">{stringShorten(description)}</Text>
                  </Td>
                  <Td isNumeric>
                    <Button
                      onClick={() => navigate(`/admin/quizzes/add_word/${id}`)}
                      size="xs"
                      colorScheme="blue"
                      color="white"
                    >
                      Add word
                    </Button>
                  </Td>
                  <Td isNumeric>
                    <Button size="xs">Edit</Button>
                  </Td>
                  <Td isNumeric>
                    <Button size="xs" colorScheme="red" color="white">
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}

export default AdminQuizzes;
