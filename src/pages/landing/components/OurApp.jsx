import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ourApp from "../../../assets/ourApp.png";
import apple from "../../../assets/apple.png";
import google from "../../../assets/google.png";
import Frame from "./../../../assets/AboutUs/Frame.webp";

const OurApp = () => {
  return (
    <Box
      p={["20px", "30px", "50px", "120px 150px"]}
      margin={["20px auto", "40px auto", "5vw auto"]}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        top={0}
        left={0}
        height={"100%"}
        width={"100%"}
      >
        <Image
          src={Frame}
          alt=""
          height={"100%"}
          width={"100%"}
          objectFit="cover"
        />
      </Box>
      <Box
        background={"#FEFEFE"}
        maxWidth={"1448px"}
        textAlign={"center"}
        width={"100%"}
        maxW={"1148px"}
        margin={"0 auto"}
        position={"relative"}
        borderRadius={"20px"}
        padding={["20px", "30px", "50px", "100px"]}
      >
        <Text
          fontWeight={"bold"}
          fontSize={["1.5rem", "2rem", "3rem", "3.5rem"]}
          color={"red.500"}
        >
          Get Our App - Send
          <br />
          Money on the Go!
        </Text>
        <Box
          display={"flex"}
          flexDirection={["column", "column", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
          gap={["10px", "20px", "30px"]}
          mt={["20px", "30px", "50px"]}
        >
          <Box>
            <Image src={apple} alt="Apple Store" h={["50px", "70px", "90px"]} />
          </Box>
          <Box>
            <Image
              src={google}
              alt="Google Play"
              h={["50px", "70px", "90px"]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurApp;
