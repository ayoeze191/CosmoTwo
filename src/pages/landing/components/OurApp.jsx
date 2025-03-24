import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ourApp from "../../../assets/ourApp.png";
import apple from "../../../assets/apple.png"
import google from "../../../assets/google.png"


const OurApp = () => {
  return (
    <Box
      p={["20px 20px", "20px 20px", "20px 20px", "20px 150px"]}
      bgImage={ourApp}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={["400px","400px","400px","500px"]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex flexDir={"column"} justify="center"  bg={"#fff"} h={"fit-content"} borderRadius={"50px"} px={["30px","30px","30px","70px"]} py="30px">
        <Box>
           <Text fontSize={["30px","30px","30px","50px"]} textAlign={"center"} fontWeight={"bold"} color={"#FF0000"}>Get Our App - Send</Text> 
           <Text fontSize={["30px","30px","30px","50px"]} textAlign={"center"} fontWeight={"bold"} color={"#FF0000"}>Money on the Go!</Text>
        </Box>
        <Flex align={"center"} justify={"center"} gap={["20px","20px","20px","50px"]} mt={"30px"}>
            <Image src={apple} h={["40px","40px","40px","50px"]} />
            <Image src={google} h={["40px","40px","40px","50px"]}/>
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurApp;
