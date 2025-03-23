import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import helpBg from "../../../assets/helpBg.png"

const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bgImage={helpBg}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={["300px","300px","300px","400px"]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
        <Flex justify={"center"} align={"center"}>
          <Text fontSize={["50px","50px","50px","70px"]} textAlign={"center"} fontWeight={"bold"} color={"#fff"}>Help Center</Text>
        </Flex>
    </Box>
  );
};

export default Hero;
