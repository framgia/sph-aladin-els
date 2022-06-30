import { Flex, Button, Heading, Text } from "@chakra-ui/react";

import React from "react";

interface Card {
  title: string;
  description: string;
}

function Card({ title, description }: Card) {
  return (
    <Flex
      justifyContent="space-between"
      h="250px"
      maxW={"560px"}
      border={"1px"}
      borderColor="gray.200"
      borderRadius={"10px"}
      flexDirection={"column"}
      p={"20px"}
      m="2"
    >
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
      <Button background={"blue.800"} maxW="100px" color="white">
        Test
      </Button>
    </Flex>
  );
}

export default Card;
