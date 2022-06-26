import { Box, Text, Container, Flex } from "@chakra-ui/react";
import { userSelect } from "../../redux/userSlice";
import { useAppSelector } from "../../redux/hooks";
import React from "react";

function UserList() {
  const { email, users } = useAppSelector(userSelect);
  return (
    <Container>
      {users &&
        users.map(({ lastname, firstname, email }) => (
          <Box
            mb={5}
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
