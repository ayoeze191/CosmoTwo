import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "../../../components/CustomButton";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import { GoArrowUpRight } from "react-icons/go";

const Platform = () => {
  return (
    <Box
      p={["20px 20px", "20px 20px", "20px 20px", "20px 20px", "100px 150px"]}
      bg={"#fff"}
    >
      <Text
        fontSize={["24px", "26px", "28px", "30px"]}
        fontWeight={"bold"}
        textAlign={"center"}
        display={"flex"}
        flexDir={["row", "row", "row", "column"]}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"9px"}
      >
        The only platform you <span> need for your</span>
      </Text>
      <Flex
        // background={"red.300"}
        // margin={}
        mt="50px"
        justifyContent={["center"]}
        flexDir={["column", "column", "column", "row"]}
        align={["center"]}
        gap={["20px", "30px", "30px", "100px"]}
      >
        <Box textAlign={["center", "center", "left", "left"]}>
          <Text
            fontSize={["24px", "26px", "28px", "30px"]}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Fast & Secure Transfers
          </Text>
          <Text
            color={"#656565"}
            maxW={["100%", "100%", "100%", "350px"]}
            textAlign={["center", "center", "center", "left"]}
            py="20px"
            fontSize={["16px", "16px", "18px", "18px"]}
          >
            Send money instantly with our cutting-edge technology and
            encryption, ensuring secure transactions every time.
          </Text>
          <Box mx="auto" w={"fit-content"}>
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
            h={["100%", "100%", "100%", "400px"]}
            borderRadius={"10px"}
          />
        </Box>
      </Flex>

      <Flex
        mt="50px"
        justifyContent={"center"}
        flexDir={["column-reverse", "column", "column", "row"]}
        align={["center"]}
        gap={["20px", "30px", "30px", "100px"]}
      >
        <Box order={["2", "2", "2", "1"]}>
          <Image
            src={p2}
            h={["100%", "100%", "100%", "400px"]}
            borderRadius={"10px"}
          />
        </Box>
        <Box
          textAlign={["center", "center", "left", "left"]}
          order={["1", "1", "1", "2"]}
        >
          <Text
            fontSize={["24px", "26px", "28px", "30px"]}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Competitive Exchange Rates
          </Text>
          <Text
            color={"#656565"}
            maxW={["100%", "100%", "100%", "350px"]}
            textAlign={["center", "center", "center", "left"]}
            py="20px"
            fontSize={["16px", "16px", "18px", "18px"]}
          >
            Get more value for your money with our market-leading exchange rates
            and low transfer fees.
          </Text>
          <Box mx="auto" w={"fit-content"}>
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
        mt="50px"
        justifyContent={"center"}
        flexDir={["column", "column", "column", "row"]}
        align={["center"]}
        gap={["20px", "30px", "30px", "100px"]}
      >
        <Box textAlign={["center", "center", "left", "left"]}>
          <Text
            fontSize={["24px", "26px", "28px", "30px"]}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Multiple Payment Options
          </Text>
          <Text
            color={"#656565"}
            maxW={["100%", "100%", "100%", "350px"]}
            textAlign={["center", "center", "center", "left"]}
            py="20px"
            fontSize={["16px", "16px", "18px", "18px"]}
          >
            Get more value for your money with our market-leading exchange rates
            and low transfer fees.
          </Text>
          <Box mx="auto" w={"fit-content"}>
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
            h={["100%", "100%", "100%", "400px"]}
            borderRadius={"10px"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Platform;
