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
import send from "../../../assets/send.png";
import limit from "../../../assets/limit.png";
import bonus from "../../../assets/bonus.png";
import referral from "../../../assets/referral.png";
import privacy from "../../../assets/privacy.png";

const Questions = () => {
  const [tabToShow, setTabToShow] = useState("general");
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}>
      <Flex align={"center"} justify={"center"} gap={"20px"} my={["20px","20px","20px","50px"]}  flexDir={["column","column","column","row"]}>
        <Box w={"full"}>
          <Text fontWeight={"bold"} fontSize={"30px"} textAlign={["center","center","center","start"]}>
            Hi, how can we help?
          </Text>
          <Text textAlign={["center","center","center","start"]}>select a category to find the help you need</Text>
        </Box>

        <Box w={"full"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#656565" />
            </InputLeftElement>
            <Input type="search" placeholder="search for a question" border={"1px solid #656565"} borderRadius={"20px"} color={"#656565"}/>
          </InputGroup>
        </Box>
      </Flex>


      <Flex justify={"center"} my="30px" gap={"50px"} flexDir={["column","column","column","row"]}>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={person} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Getting Started
          </Text>
          <Text maxW={"300px"} color={"#656565"} textAlign={"start"}>
            Setting up your account, getting verified, 2FA set-up, updating
            personal information, etc.
          </Text>
        </Box>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={send} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Sending Money
          </Text>
          <Text maxW={"300px"}  color={"#656565"} textAlign={"start"}>
            Sending money, receiving money, canceling a transaction, sending fee
            rate, etc.
          </Text>
        </Box>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={limit} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Increasing Limit
          </Text>
          <Text maxW={"300px"} color={"#656565"} textAlign={"start"}>
            Sending limit, increasing sending limit, document submission,
            decreasing limits, withdrawal limit, etc.
          </Text>
        </Box>
      </Flex>
      <Flex justify={"center"} my="50px" gap={"50px"} flexDir={["column","column","column","row"]}>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={bonus} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Transaction Bonus
          </Text>
          <Text maxW={"300px"} color={"#656565"} textAlign={"start"}>
            Transaction bonuses offer, types of transaction bonuses, receiving
            bonuses bonus limits, etc.
          </Text>
        </Box>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={referral} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Referral
          </Text>
          <Text maxW={"300px"} color={"#656565"} textAlign={"start"}>
            How to get my referral link, getting my referral reward, referral
            minimum, withdrawing referral bonuses, etc.
          </Text>
        </Box>
        <Box bg={"#eee"} borderRadius={"10px"} textAlign={"center"} p={"30px"}>
          <Flex justify={"center"}>
            <Image src={privacy} h={"50px"} />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"20px"} py="20px">
            Privacy Policy
          </Text>
          <Text maxW={"300px"} color={"#656565"} textAlign={"start"}>
            Information CosmoRemit collects, personal data security, deleting or
            removing my personal data, etc.
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent={"center"} mt="70px">
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
      <Flex justify={"center"} gap={["10px","10px","10px","50px"]} my="30px" flexDir={["column","column","column","row"]}>
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
