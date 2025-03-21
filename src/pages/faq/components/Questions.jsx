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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useState } from "react";
import General from "./General";
import headset from "../../../assets/headset.png"
import phone from "../../../assets/phone.png"
import livechat from "../../../assets/livechat.png"

const Questions = () => {
  const [tabToShow, setTabToShow] = useState("general");
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}>
      <Flex align={"center"} justify={"center"} gap={"100px"}>
        <Text fontWeight={"medium"}>
          Have questions about<span style={{ color: "red" }}> CosmoRemit?</span>{" "}
          We’ve got quick answers here
        </Text>
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input type="search" placeholder="Phone number" />
          </InputGroup>
        </Box>
      </Flex>
      <Flex justify={"center"} my="50px">
        <Tabs>
          <TabList>
            <Tab
              onClick={() => {
                setTabToShow("general");
              }}
            >
              General
            </Tab>
            <Tab>Getting started</Tab>
            <Tab>Sending money</Tab>
            <Tab>Increasing your limit</Tab>
            <Tab>Transaction Bonus</Tab>
            <Tab>Referral</Tab>
          </TabList>
        </Tabs>
      </Flex>

      <Flex justify={"center"}>
        {tabToShow === "general" ? <General /> : <General />}
      </Flex>

      <Flex justifyContent={"center"}>
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
