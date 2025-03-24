import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const International = () => {
  return (
    <Flex
      p={["20px 20px", "20px 20px", "20px 20px", "50px 150px"]}
      bg={"#fff"}
      justify={"center"}
      align={"center"}
      h={"300px"}
    >
        <Text fontSize={"30px"} fontWeight={"bold"} textAlign={["center"]}>You can now send money <span style={{color:"red", fontWeight:"1000px", textTransform:"uppercase"}}>internationally</span> in these currencies</Text>
    </Flex>
  );
};

export default International;
