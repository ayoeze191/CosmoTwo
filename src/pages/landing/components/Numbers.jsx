import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import pounds from "../../../assets/pounds.png";
import users from "../../../assets/users.png";
import youtube from "../../../assets/youtube.png";

const Numbers = () => {
  return (
    <Flex
      p={["20px 20px", "20px 20px", "20px 20px", "20px 20px", "100px 150px"]}
      bg={"#fff"}
      justifyContent={["center", "center", "center"]}
      flexWrap={"wrap"}
      gap={["20px", "30px", "40px", "100px"]}
    >
      <Box
        textAlign={["center", "center", "left"]}
        maxW={["100%", "100%", "250px"]}
      >
        <Image src={pounds} mx={["auto", "auto", "0"]} />
        <Text fontWeight={"bold"} py="10px" fontSize={["20px", "22px", "25px"]}>
          200K+
        </Text>
        <Text
          color={"#656565"}
          fontSize={["16px", "17px", "18px"]}
          maxW={"250px"}
        >
          Over 200,000+ Successful Transactions and Counting
        </Text>
      </Box>
      <Box
        textAlign={["center", "center", "left"]}
        maxW={["100%", "100%", "250px"]}
      >
        <Image src={youtube} mx={["auto", "auto", "0"]} />
        <Text fontWeight={"bold"} py="10px" fontSize={["20px", "22px", "25px"]}>
          $15m+
        </Text>
        <Text
          color={"#656565"}
          fontSize={["16px", "17px", "18px"]}
          maxW={"250px"}
        >
          Over $15 Million+ Money Remitted Successfully!
        </Text>
      </Box>
      <Box
        textAlign={["center", "center", "left"]}
        maxW={["100%", "100%", "250px"]}
      >
        <Image src={users} mx={["auto", "auto", "0"]} />
        <Text fontWeight={"bold"} py="10px" fontSize={["20px", "22px", "25px"]}>
          10k+
        </Text>
        <Text
          color={"#656565"}
          fontSize={["16px", "17px", "18px"]}
          maxW={"250px"}
        >
          Trusted by 10,000+ Users Worldwide!
        </Text>
      </Box>
    </Flex>
  );
};

export default Numbers;
