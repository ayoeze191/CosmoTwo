import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import headset from "../../../assets/headset.png";
import phone from "../../../assets/phone.png";
import livechat from "../../../assets/livechat.png";
import person from "../../../assets/person.png";

const Questions = () => {
  const [tabToShow, setTabToShow] = useState("general");
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}>
      <Flex align={"center"} justify={"center"} gap={"150px"}>
        <Box>
          <Text fontWeight={"bold"} fontSize={"30px"}>
            Hi, how can we help?
          </Text>
          <Text>select a category to find the help you need</Text>
        </Box>

        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="search" placeholder="search" />
          </InputGroup>
        </Box>
      </Flex>
      <Flex justify={"center"} my="30px" gap={"50px"}>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={person} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Getting Started
          </Text>
          <Text maxW={"300px"}>
            Setting up your account, getting verified, 2FA set-up, updating
            personal information, etc.
          </Text>
        </Box>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={person} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Sending Money
          </Text>
          <Text maxW={"300px"}>
            Sending money, receiving money, canceling a transaction, sending fee
            rate, etc.
          </Text>
        </Box>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={person} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Increasing Limit
          </Text>
          <Text maxW={"300px"}>
            Sending limit, increasing sending limit, document submission,
            decreasing limits, withdrawal limit, etc.
          </Text>
        </Box>
      </Flex>
      <Flex justify={"center"} my="30px" gap={"50px"}>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={person} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Transaction Bonus
          </Text>
          <Text maxW={"300px"}>
            Transaction bonuses offer, types of transaction bonuses, receiving
            bonuses bonus limits, etc.
          </Text>
        </Box>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={person} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Referral
          </Text>
          <Text maxW={"300px"}>
            How to get my referral link, getting my referral reward, referral
            minimum, withdrawing referral bonuses, etc.
          </Text>
        </Box>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={person} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Privacy Policy
          </Text>
          <Text maxW={"300px"}>
            Information CosmoRemit collects, personal data security, deleting or
            removing my personal data, etc.
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent={"center"} mt="30px">
        <Text fontWeight={"bold"}>Are you still in need of help?</Text>
      </Flex>
      <Text
        fontSize={"15px"}
        fontWeight={"medium"}
        textAlign={"center"}
        py="10px"
      >
        Can't find the answers you are looking for? explore other options
      </Text>
      <Flex justify={"center"} gap={"50px"}>
        <Flex
          justify={"center"}
          gap={5}
          align={"center"}
          bg={"#eee"}
          p="10px"
          borderRadius={"8px"}
          textAlign={"center"}
          mb="20px"
        >
          <Image src={headset} h={"30px"} />
          <Text color={"#000"} fontWeight={"medium"}>
            Visit help center
          </Text>
        </Flex>
        <Flex
          justify={"center"}
          gap={5}
          align={"center"}
          bg={"#eee"}
          p="10px"
          borderRadius={"8px"}
          textAlign={"center"}
          mb="20px"
        >
          <Image src={livechat} h={"30px"} />
          <Text color={"#000"} fontWeight={"medium"}>
            Live chat
          </Text>
        </Flex>
        <Flex
          justify={"center"}
          gap={5}
          align={"center"}
          bg={"#eee"}
          p="10px"
          borderRadius={"8px"}
          textAlign={"center"}
          mb="20px"
        >
          <Image src={phone} h={"30px"} />
          <Text color={"#000"} fontWeight={"medium"}>
            Contact us
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Questions;
