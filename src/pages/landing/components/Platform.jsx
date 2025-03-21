import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "../../../components/CustomButton";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";

const Platform = () => {
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "50px 150px"]} bg={"#fff"}>
      <Text fontSize={"30px"} fontWeight={"bold"} textAlign={"center"}>
        The only platform you need for your
      </Text>
      <Flex mt="50px" justifyContent={"center"} align={"center"} gap={"100px"}>
        <Box>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Fast & Secure Transfers
          </Text>
          <Text color={"#656565"} maxW={"350px"} py="20px">
            Send money instantly with our cutting-edge technology and
            encryption, ensuring secure transactions every time.
          </Text>
          <CustomButton
            btnText={"sign-in to get started"}
            bg={"none"}
            color={"#296F63"}
            px={"0px"}
          />
        </Box>

        <Box>
          <Image src={p1} h={"400px"} borderRadius={"10px"} />
        </Box>
      </Flex>

      <Flex mt="50px" justifyContent={"center"} align={"center"} gap={"100px"}>
        <Box>
          <Image src={p2} h={"400px"} borderRadius={"10px"} />
        </Box>
        <Box>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Competitive Exchange Rates
          </Text>
          <Text color={"#656565"} maxW={"350px"} py="20px">
            Get more value for your money with our market-leading exchange rates
            and low transfer fees.
          </Text>
          <CustomButton
            btnText={"sign-in to get started"}
            bg={"none"}
            color={"#296F63"}
            px={"0px"}
          />
        </Box>
      </Flex>

      <Flex mt="50px" justifyContent={"center"} align={"center"} gap={"100px"}>
        <Box>
          <Text fontSize={"20px"} fontWeight={"bold"}>
            Multiple Payment Options
          </Text>
          <Text color={"#656565"} maxW={"350px"} py="20px">
            Get more value for your money with our market-leading exchange rates
            and low transfer fees.
          </Text>
          <CustomButton
            btnText={"sign-in to get started"}
            bg={"none"}
            color={"#296F63"}
            px={"0px"}
          />
        </Box>
        <Box>
          <Image src={p3} h={"400px"} borderRadius={"10px"} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Platform;
