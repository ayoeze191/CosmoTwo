import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ourApp from "../../../assets/ourApp.png";
import apple from "../../../assets/apple.png";
import google from "../../../assets/google.png";

const OurApp = () => {
  return (
    <Box
      p={["50px 20px", "100px 20px", "100px 20px", "120px 150px"]}
      bgImage={ourApp}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      // h={["400px", "400px", "400px", "500px"]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        flexDir={"column"}
        justify="center"
        bg={"#fff"}
        h={"fit-content"}
        width={"100%"}
        justifyContent={"center"}
        borderRadius={"50px"}
        py={["100px", "150px", "150px", "200px"]}
        // py="200px"
      >
        <Box
          maxW={"762px"}
          display={"flex"}
          flexDir={"column"}
          // background={"red.200"}
          mx={"auto"}
          alignItems={"center"}
        >
          <Text
            fontSize={["30px", "30px", "50px", "80px"]}
            textAlign={"center"}
            w={"fit-content"}
            fontWeight={"bold"}
            color={"#FF0000"}
          >
            Get Our App - Send
          </Text>
          <Text
            fontSize={["30px", "30px", "50px", "80px"]}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"#FF0000"}
          >
            Money on the Go!
          </Text>
        </Box>
        <Flex
          align={"center"}
          justify={"center"}
          gap={["20px", "20px", "20px", "50px"]}
          mt={"30px"}
        >
          <Image src={apple} h={["40px", "40px", "40px", "50px"]} />
          <Image src={google} h={["40px", "40px", "40px", "50px"]} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default OurApp;
