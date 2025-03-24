import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "../../../components/CustomButton";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import { GoArrowUpRight } from "react-icons/go";

const Platform = () => {
  return (
    <Box p={["20px", "20px", "50px", "100px 150px"]} bg={"#fff"}>
      <Text
        fontSize={["20px", "24px", "28px", "30px"]}
        fontWeight={"bold"}
        textAlign={"center"}
        display={"flex"}
        flexDir={["column", "column", "row", "row"]}
        alignItems={"center"}
        justifyContent={"center"}
        gap={["5px", "7px", "9px", "9px"]}
      >
        The only platform you <span> need for your</span>
      </Text>
      <Flex
        mt={["50px", "70px", "80px", "100px"]}
        justifyContent={"center"}
        flexDir={["column", "column", "row", "row"]}
        align={["center", "center", "flex-start", "flex-start"]}
        gap={["20px", "30px", "50px", "100px"]}
      >
        <Box textAlign={["center", "center", "left", "left"]}>
          <Text fontSize={["20px", "24px", "28px", "30px"]} fontWeight={"bold"}>
            Fast & Secure Transfers
          </Text>
          <Text
            color={"#656565"}
            maxW={["100%", "100%", "80%", "350px"]}
            textAlign={["center", "center", "left", "left"]}
            py="20px"
            fontSize={["14px", "16px", "18px", "18px"]}
          >
            Send money instantly with our cutting-edge technology and
            encryption, ensuring secure transactions every time.
          </Text>
          <Box mx={["auto", "auto", "initial", "initial"]} w={"fit-content"}>
            <CustomButton
              mx={"auto"}
              btnText={"sign-in to get started"}
              bg={"none"}
              color={"#296F63"}
              fontWeight="bold"
              px={"0px"}
              rightIcon={<GoArrowUpRight />}
            />
          </Box>
        </Box>

        <Box>
          <Image
            src={p1}
            w={["100%", "100%", "80%", "593px"]}
            borderRadius={"10px"}
          />
        </Box>
      </Flex>

      <Flex
        mt={["50px", "70px", "80px", "100px"]}
        justifyContent={"center"}
        flexDir={["column", "column", "row", "row"]}
        align={["center", "center", "flex-start", "flex-start"]}
        gap={["20px", "30px", "50px", "100px"]}
      >
        <Box order={["2", "2", "1", "1"]}>
          <Image
            src={p2}
            w={["100%", "100%", "80%", "593px"]}
            borderRadius={"10px"}
          />
        </Box>
        <Box
          textAlign={["center", "center", "left", "left"]}
          order={["1", "1", "2", "2"]}
        >
          <Text fontSize={["20px", "24px", "28px", "30px"]} fontWeight={"bold"}>
            Competitive Exchange Rates
          </Text>
          <Text
            color={"#656565"}
            maxW={["100%", "100%", "80%", "350px"]}
            textAlign={["center", "center", "left", "left"]}
            py="20px"
            fontSize={["14px", "16px", "18px", "18px"]}
          >
            Get more value for your money with our market-leading exchange rates
            and low transfer fees.
          </Text>
          <Box mx={["auto", "auto", "initial", "initial"]} w={"fit-content"}>
            <CustomButton
              mx={"auto"}
              btnText={"sign-in to get started"}
              bg={"none"}
              color={"#296F63"}
              fontWeight="bold"
              px={"0px"}
              rightIcon={<GoArrowUpRight />}
            />
          </Box>
        </Box>
      </Flex>

      <Flex
        mt={["50px", "70px", "80px", "100px"]}
        justifyContent={"center"}
        flexDir={["column", "column", "row", "row"]}
        align={["center", "center", "flex-start", "flex-start"]}
        gap={["20px", "30px", "50px", "100px"]}
      >
        <Box textAlign={["center", "center", "left", "left"]}>
          <Text fontSize={["20px", "24px", "28px", "30px"]} fontWeight={"bold"}>
            Multiple Payment Options
          </Text>
          <Text
            color={"#656565"}
            maxW={["100%", "100%", "80%", "350px"]}
            textAlign={["center", "center", "left", "left"]}
            py="20px"
            fontSize={["14px", "16px", "18px", "18px"]}
          >
            Get more value for your money with our market-leading exchange rates
            and low transfer fees.
          </Text>
          <Box
            // mx="auto"
            mx={["auto", "auto", "initial", "initial"]}
            // w={"fit-content"}
          >
            <CustomButton
              mx={"auto"}
              btnText={"sign-in to get started"}
              bg={"none"}
              color={"#296F63"}
              fontWeight="bold"
              px={"0px"}
              rightIcon={<GoArrowUpRight />}
            />
          </Box>
        </Box>
        <Box>
          <Image
            src={p3}
            w={["100%", "100%", "80%", "593px"]}
            borderRadius={"10px"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Platform;
