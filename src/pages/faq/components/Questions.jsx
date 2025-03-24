import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useState } from "react";
import General from "./General";
import headset from "../../../assets/headset.png"
import phone from "../../../assets/phone.png"
import livechat from "../../../assets/livechat.png"

const Questions = () => {
  const [tabToShow, setTabToShow] = useState("general");
  const tabOrientation = useBreakpointValue({ base: "vertical", md: "horizontal" });
  return (
    <Box p={["20px 20px", "20px 20px", "20px 20px", "20px 150px"]}>
      <Flex align={"center"} justify={"center"} gap={["20px","20px","20px","100px"]} flexDir={["column","column","column","row"]}>
        <Text fontWeight={"medium"} textAlign={["center","center","center","start"]}>
          Have questions about<span style={{ color: "red" }}> CosmoRemit?</span>{" "}
          We’ve got quick answers here
        </Text>
         <Box w={"full"}>
                 <InputGroup>
                   <InputLeftElement pointerEvents="none">
                     <SearchIcon color="#656565" />
                   </InputLeftElement>
                   <Input type="search" placeholder="search for a question" border={"1px solid #656565"} borderRadius={"20px"} color={"#656565"}/>
                 </InputGroup>
               </Box>
      </Flex>
      <Flex justify={"center"} my="50px" >
        <Tabs orientation={tabOrientation}>
          <TabList 
          display="flex"
          flexDirection={{ base: "column", md: "row" }} 
          overflowX={{ base: "auto", md: "visible" }}
          whiteSpace="nowrap"
          >
            <Tab
              onClick={() => {
                setTabToShow("general");
              }}
              fontSize={{ base: "md", md: "md" }} p={{ base: "10px", md: "16px" }}
            >
              General
            </Tab>
            <Tab fontSize={{ base: "md", md: "md" }} p={{ base: "10px", md: "16px" }}>Getting started</Tab>
            <Tab fontSize={{ base: "md", md: "md" }} p={{ base: "10px", md: "16px" }}>Sending money</Tab>
            <Tab fontSize={{ base: "md", md: "md" }} p={{ base: "10px", md: "16px" }}>Increasing your limit</Tab>
            <Tab fontSize={{ base: "md", md: "md" }} p={{ base: "10px", md: "16px" }}>Transaction Bonus</Tab>
            <Tab fontSize={{ base: "md", md: "md" }} p={{ base: "10px", md: "16px" }}>Referral</Tab>
          </TabList>
        </Tabs>
      </Flex>

      <Flex justify={["start","center"]}>
        {tabToShow === "general" ? <General /> : <General />}
      </Flex>

      <Flex justifyContent={"center"} mt={"10px"}>
        <Text fontWeight={"bold"}>Are you still in need of help?</Text>
      </Flex>
      <Text
        fontSize={"15px"}
        fontWeight={"medium"}
        textAlign={"center"}
        py="20px"
      >
        Can't find the answers you are looking for? explore other options
      </Text>
      <Flex justify={"center"} gap={["10px","10px","10px","50px"]} flexDir={["column","column","column","row"]}>
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
