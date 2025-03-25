import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import map from "../../../assets/map.png";
import Malta from "../../../assets/Malta.png";
import uk from "../../../assets/uk.png";
import turkey from "../../../assets/turkey.png";
import greece from "../../../assets/greece.png";
import france from "../../../assets/france.png";
import honkkong from "../../../assets/honkkong.png";
import ci from "../../../assets/ci.png";
import uae from "../../../assets/uae.png";
import fiji from "../../../assets/fiji.png";
import si from "../../../assets/si.png";
import tonga from "../../../assets/tonga.png";
import Vanuatu from "../../../assets/Vanuatu.png";
import samao from "../../../assets/samao.png";
import Argentina from "../../../assets/Argentina.png";
import brazil from "../../../assets/brazil.png";
import usa from "../../../assets/usa.png";
import canada from "../../../assets/canada.png";
import China from "../../../assets/China.png";
import Nepal from "../../../assets/Nepal.png";
import Singapore from "../../../assets/Singapore.png";
import Bangladash from "../../../assets/Bangladash.png";
import Srilanka from "../../../assets/Srilanka.png";
import India from "../../../assets/India.png";
import mongolia from "../../../assets/mongolia.png";
import phillipines from "../../../assets/phillipines.png";
import vietem from "../../../assets/vietem.png";
import naija from "../../../assets/naija.png";
import ethiopia from "../../../assets/ethiopia.png";
import tanania from "../../../assets/tanania.png";
import zimbabwe from "../../../assets/zimbabwe.png";
import mauritus from "../../../assets/mauritus.png";
import Kenya from "../../../assets/Kenya.png";
import Egypt from "../../../assets/Egypt.png";
import sa from "../../../assets/sa.png";
import dc from "../../../assets/dc.png";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const Countries = () => {
  const [text, setText] = useState("internationally");
  useEffect(() => {
    // Simulate a delay and then change "internationally" to "instantly"
    const timeout = setTimeout(() => {
      setText("instantly");
    }, 2000); // Change the word after 2 seconds (you can adjust this delay)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box
      p={["20px 20px", "20px 20px", "20px 20px", "50px 150px"]}
      bgImage={map}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      //   h={"700px"}
    >
      <Box textAlign={"center"} mt={"50px"}>
        <Text fontSize={"30px"} fontWeight={"bold"}>
          Send money <span style={{ color: "#000080" }}>INTERNATIONALLY,</span>{" "}
          <span style={{ color: "#FF0000" }}>EASILY </span>and{" "}
          <span style={{ color: "#000080" }}> SWIFTLY</span>
        </Text>
        <Text
          color={"#656565"}
          maxWidth={"1029px"}
          margin={"0px auto"}
          mt={"20px"}
        >
          With <span style={{ fontWeight: "bold" }}>CosmoRemit,</span> you can
          send money to friends, family, and business partners across the globe
          quickly and securely. We support international money transfers to a
          wide range of countries, ensuring that your funds arrive safely and on
          time.
        </Text>
        <Text color={"#656565"} py="30px">
          Here are some of the key destination we serve:
        </Text>
      </Box>
      <Flex flexDir={"column"} margin={"0px auto"} maxW={"1029px"}>
        <Text color={"#FF0000"} fontWeight={"bold"}>
          Europe
        </Text>
        <Flex
          mt="10px"
          gap={["10px", "10px", "10px", "50px"]}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          pb={"10px"} // Prevents content from being clipped at the bottom during scroll
        >
          <HStack
            spacing={2}
            bg={"#FFE6E6"}
            borderRadius={"50px"}
            border={"1px solid #FF0000"}
            px="10px"
            py={"5px"}
            minW={"120px"} // Ensures proper spacing without wrapping
            justify={"center"}
          >
            <Image src={Malta} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Malta</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FFE6E6"}
            borderRadius={"50px"}
            border={"1px solid #FF0000"}
            px="10px"
            py={"5px"}
            minW={"160px"}
            justify={"center"}
          >
            <Image src={uk} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>
              United Kingdom
            </Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FFE6E6"}
            borderRadius={"50px"}
            border={"1px solid #FF0000"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={france} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>France</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FFE6E6"}
            borderRadius={"50px"}
            border={"1px solid #FF0000"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={turkey} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Turkey</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FFE6E6"}
            borderRadius={"50px"}
            border={"1px solid #FF0000"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={greece} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Greece</Text>
          </HStack>
        </Flex>
      </Flex>

      <Flex flexDir={"column"} margin={"0px auto"} maxW={"1029px"} mt="30px">
        <Text color={"#296F63"} fontWeight={"bold"}>
          Africa
        </Text>

        <Flex
          mt="10px"
          gap={["10px", "10px", "10px", "50px"]}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          pb={"10px"}
        >
          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={naija} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Nigeria</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={ethiopia} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Ethiopia</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={tanania} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Tanzania</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={zimbabwe} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Zimbabwe</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={mauritus} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Mauritius</Text>
          </HStack>
        </Flex>

        <Flex
          mt="10px"
          gap={["10px", "10px", "10px", "50px"]}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          pb={"10px"}
        >
          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={Kenya} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Kenya</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={Egypt} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Egypt</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"140px"}
            justify={"center"}
          >
            <Image src={sa} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>
              South Africa
            </Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #296F63"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={dc} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Dr Congo</Text>
          </HStack>
        </Flex>
      </Flex>

      <Flex flexDir={"column"} margin={"0px auto"} maxW={"1029px"} mt="30px">
        <Text color={"#0C4569"} fontWeight={"bold"}>
          Asia
        </Text>

        <Flex
          mt="10px"
          gap={["10px", "10px", "10px", "50px"]}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          pb={"10px"}
        >
          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={China} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>China</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={Nepal} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Nepal</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={Singapore} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Singapore</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={Bangladash} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Bangladesh</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={Srilanka} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Sri Lanka</Text>
          </HStack>
        </Flex>

        <Flex
          mt="10px"
          gap={["10px", "10px", "10px", "50px"]}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          pb={"10px"}
        >
          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={India} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>India</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={mongolia} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Mongolia</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"130px"}
            justify={"center"}
          >
            <Image src={phillipines} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Philippines</Text>
          </HStack>

          <HStack
            spacing={2}
            borderRadius={"50px"}
            border={"1px solid #0C4569"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={vietem} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Vietnam</Text>
          </HStack>
        </Flex>
      </Flex>

      <Flex flexDir={"column"} margin={"0px auto"} maxW={"1029px"} mt="30px">
        <Text color={"#000080"} fontWeight={"bold"}>
          North and South America
        </Text>

        <Flex
          mt="10px"
          gap={["10px", "10px", "10px", "50px"]}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          pb={"10px"}
        >
          <HStack
            spacing={2}
            bg={"#E6E6F2"}
            borderRadius={"50px"}
            border={"1px solid #000080"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={Argentina} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Argentina</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#E6E6F2"}
            borderRadius={"50px"}
            border={"1px solid #000080"}
            px="10px"
            py={"5px"}
            minW={"140px"}
            justify={"center"}
          >
            <Image src={usa} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>
              United States
            </Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#E6E6F2"}
            borderRadius={"50px"}
            border={"1px solid #000080"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={brazil} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Brazil</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#E6E6F2"}
            borderRadius={"50px"}
            border={"1px solid #000080"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={canada} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Canada</Text>
          </HStack>
        </Flex>
      </Flex>

      <Flex flexDir={"column"} margin={"0px auto"} maxW={"1029px"} mt="30px">
        <Text color={"#F07400"} fontWeight={"bold"}>
          Oceania
        </Text>

        <Flex
          mt="10px"
          gap={["10px", "10px", "10px", "50px"]}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          pb={"10px"}
        >
          <HStack
            spacing={2}
            bg={"#FEF1E6"}
            borderRadius={"50px"}
            border={"1px solid #F07400"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={fiji} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Fiji</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FEF1E6"}
            borderRadius={"50px"}
            border={"1px solid #F07400"}
            px="10px"
            py={"5px"}
            minW={"170px"}
            justify={"center"}
          >
            <Image src={si} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>
              Solomon Island
            </Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FEF1E6"}
            borderRadius={"50px"}
            border={"1px solid #F07400"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={tonga} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Tonga</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FEF1E6"}
            borderRadius={"50px"}
            border={"1px solid #F07400"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={Vanuatu} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Vanuatu</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FEF1E6"}
            borderRadius={"50px"}
            border={"1px solid #F07400"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={samao} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Samoa</Text>
          </HStack>
        </Flex>
      </Flex>

      <Flex flexDir={"column"} margin={"0px auto"} maxW={"1029px"} mt="30px">
        <Text color={"#F00098"} fontWeight={"bold"}>
          Other Countries
        </Text>

        <Flex
          mt="10px"
          gap={["10px", "10px", "10px", "50px"]}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          pb={"10px"}
        >
          <HStack
            spacing={2}
            bg={"#FEE6F5"}
            borderRadius={"50px"}
            border={"1px solid #F00098"}
            px="10px"
            py={"5px"}
            minW={"130px"}
            justify={"center"}
          >
            <Image src={honkkong} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>Hong Kong</Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FEE6F5"}
            borderRadius={"50px"}
            border={"1px solid #F00098"}
            px="10px"
            py={"5px"}
            minW={"170px"}
            justify={"center"}
          >
            <Image src={ci} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>
              Christmas Island
            </Text>
          </HStack>

          <HStack
            spacing={2}
            bg={"#FEE6F5"}
            borderRadius={"50px"}
            border={"1px solid #F00098"}
            px="10px"
            py={"5px"}
            minW={"120px"}
            justify={"center"}
          >
            <Image src={uae} h={"15px"} />
            <Text fontSize={["12px", "14px", "16px", "18px"]}>U.A.E</Text>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Countries;
