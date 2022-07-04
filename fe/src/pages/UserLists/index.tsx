import { Box, Text, Container, Flex } from "@chakra-ui/react";
import { getUsers, userSelect } from "../../redux/userSlice";
import { useAppSelector } from "../../redux/hooks";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";

function UserList() {
  const { email, users, token, isSignedIn } = useAppSelector(userSelect);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers(token));
  }, [token]);
  return (
    <Container>
      {users &&
        users.map(({ lastname, firstname, email, id }) => (
          <Box
            mb={5}
            key={id}
            borderRadius={"5"}
            w="100%"
            p={4}
            boxShadow={"xs"}
            border={"1px"}
            borderColor={"gray.100"}
            color="white"
          >
            {firstname || lastname ? (
              <Text color={"gray.600"} fontSize="lg">
                <span>{firstname}</span>
                <span>{` ${lastname}`}</span>
              </Text>
            ) : (
              <Text color={"gray.600"} fontSize="lg">
                {email}
              </Text>
            )}
          </Box>
        ))}
    </Container>
  );
}

export default UserList;
