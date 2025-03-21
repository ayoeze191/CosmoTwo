import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ourApp from "../../../assets/ourApp.png";
import apple from "../../../assets/apple.png"
import google from "../../../assets/google.png"

const OurApp = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bgImage={ourApp}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"500px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex flexDir={"column"} justify="center"  bg={"#fff"} h={"300px"} borderRadius={"50px"} px="70px">
        <Box>
           <Text fontSize={"30px"} textAlign={"center"} fontWeight={"bold"} color={"#FF0000"}>Get Our App - Send</Text> 
           <Text fontSize={"30px"} textAlign={"center"} fontWeight={"bold"} color={"#FF0000"}>Money on the Go!</Text>
        </Box>
        <Flex align={"center"} gap={"50px"} mt={"30px"}>
            <Image src={apple} h={"40px"} />
            <Image src={google} h="40px" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurApp;
