import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const International = () => {
  return (
    <Flex
      p={["20px", "20px", "50px", "100px 150px"]}
      bg={"#fff"}
      justify={"center"}
      align={"center"}
      h={["auto", "auto", "300px"]}
      flexDirection={"column"}
    >
      <Text
        fontSize={["20px", "25px", "30px", "40px"]}
        fontWeight={"bold"}
        maxW={"1322px"}
        textAlign={"center"}
      >
        You can now send money{" "}
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          internationally
        </span>{" "}
        in these currencies
      </Text>
    </Flex>
  );
};

export default International;
