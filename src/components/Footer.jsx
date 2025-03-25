import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import facebook from "../assets/facebook.png";
import pm from "../assets/pm.png";
import tube from "../assets/tube.png";
import twitte from "../assets/twitte.png";
import linked from "../assets/linked.png";
import location from "../assets/location.png";
import internet from "../assets/internet.png";

const Footer = () => {
  return (
    <Box
      p={["20px", "20px", "50px", "50px", "100px 50px", "100px 150px"]}
      bg={"#000"}
      color={"#FEFEFE"}
    >
      <Text
        fontWeight={"bold"}
        fontSize={["30px", "40px", "50px"]}
        textAlign={["center", "center", "left"]}
      >
        CosmoRemit
      </Text>
      <Text
        fontSize={["14px", "16px", "18px"]}
        textAlign={["center", "center", "left"]}
      >
        Fintech solution
      </Text>
      <Flex
        justify={["center", "center", "flex-end"]}
        mb={["20px", "30px", "50px"]}
        direction={["column", "column", "row"]}
      >
        <Box textAlign={["center", "center", "left"]}>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"18px"}>
            We are a proud member of
          </Text>
          <Flex justify={"center"} mt={["10px", "15px", "20px"]}>
            <Image src={pm} h={["30px", "40px", "130px"]} />
          </Flex>
        </Box>
      </Flex>

      <Divider />
      <Flex
        px={["10px", "20px", "50px"]}
        my={["20px", "30px", "40px"]}
        justify={["center", "space-between"]}
        direction={["column", "column", "row"]}
        gap={["10px", "15px", "15px", "20px", "50px"]}
      >
        <Box width={["100%", "100%", "100%"]}>
          <Flex
            justify={"center"}
            gap={["10px", "15px", "20px"]}
            align={"center"}
            bg={"#fff"}
            py={["5px", "10px", "15px"]}
            // w={}
            borderRadius={"8px"}
            textAlign={"center"}
            mb={["10px", "15px", "20px"]}
            width={"100%"}
            mx="auto"
          >
            <Image src={location} h={"30px"} />
            <Text
              color={"#000"}
              fontSize={["18px", "18px", "22px", "20px", "20px", "25px"]}
              lineHeight={"150%"}
              fontWeight={"medium"}
            >
              Australia Contact Info
            </Text>
          </Flex>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"22px"}>
            Address: Floor 14 153 MacQuarie Street
          </Text>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"22px"}>
            City: Parramatta
          </Text>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"22px"}>
            Postcode: 2150
          </Text>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"22px"}>
            Country: Australia
          </Text>
          <Box my={["10px", "15px", "20px"]}>
            <Divider />
          </Box>
          <Text fontSize={["14px", "16px", "18px"]}>Swift Code: CSPYAU22</Text>
          <Text fontSize={["14px", "16px", "18px"]}>
            Bank: CosmoRemit PTY LTD
          </Text>
          <Box my={["10px", "15px", "20px"]}>
            <Divider />
          </Box>
          <Text fontSize={["14px", "16px", "18px"]}>(02) 96 159 832</Text>
          <Text fontSize={["14px", "16px", "18px"]}>(+61) 414 151 549</Text>
          <Text fontSize={["14px", "16px", "18px"]}>(+61) 470 628 369</Text>
          <Box my={["10px", "15px", "20px"]}>
            <Divider />
          </Box>
          <Text fontSize={["14px", "16px", "18px"]}>
            admin@cosmoremit.com.au
          </Text>
        </Box>
        <Box width={["100%", "100%", "100%"]}>
          <Flex
            justify={"center"}
            gap={["10px", "10px", "10px", "10px", "15px", "15px", "20px"]}
            align={"center"}
            bg={"#fff"}
            py={["5px", "10px", "15px"]}
            borderRadius={"8px"}
            textAlign={"center"}
            mb={["10px", "15px", "20px"]}
            width={"100%"}
            mx="auto"
          >
            <Image src={location} h={"30px"} />
            <Text
              color={"#000"}
              fontSize={["18px", "18px", "22px", "20px", "20px", "25px"]}
              lineHeight={"150%"}
              fontWeight={"medium"}
            >
              New Zealand Contact Info
            </Text>
          </Flex>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"22px"}>
            Address: 2/83 Sutherland Street
          </Text>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"22px"}>
            City: Dunedin Central
          </Text>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"22px"}>
            Postcode: 9016
          </Text>
          <Text fontSize={["14px", "16px", "18px"]} lineHeight={"22px"}>
            Country: New Zealand
          </Text>
          <Box my={["10px", "15px", "20px"]}>
            <Divider />
          </Box>
          <Text fontSize={["14px", "16px", "18px"]}>Swift Code: CSPYAU22</Text>
          <Text fontSize={["14px", "16px", "18px"]}>
            Bank: CosmoRemit PTY LTD
          </Text>
          <Box my={["10px", "15px", "20px"]}>
            <Divider />
          </Box>
          <Text fontSize={["14px", "16px", "18px"]}>(+64) 448 812 66</Text>
          <Text fontSize={["14px", "16px", "18px"]}>(+64) 980 129 66</Text>
          <Text fontSize={["14px", "16px", "18px"]}>
            (+64) 358 809 98 (After 7pm only)
          </Text>
          <Text fontSize={["14px", "16px", "18px"]}>
            (+64) 204 083 2971 (WhatsApp only)
          </Text>
          <Box my={["10px", "15px", "20px"]}>
            <Divider />
          </Box>
          <Text fontSize={["14px", "16px", "18px"]}>
            admin@cosmoremit.com.au
          </Text>
        </Box>

        <Box width={["100%", "100%", "100%"]}>
          <Flex
            mx={"auto"}
            justify={"center"}
            gap={["10px", "15px", "20px"]}
            align={"center"}
            bg={"#fff"}
            py={["5px", "10px", "15px"]}
            // px={["5px", "10px", "40px"]}
            borderRadius={"8px"}
            textAlign={"center"}
            mb={["10px", "15px", "20px"]}
            width={"100%"}
          >
            <Image src={internet} h={"30px"} />
            <Text
              color={"#000"}
              fontSize={["18px", "18px", "22px", "20px", "20px", "25px"]}
              lineHeight={"150%"}
              fontWeight={"medium"}
            >
              Our social media
            </Text>
          </Flex>
          <Text textAlign={"center"}>
            Follow up our socials to stay up to date on the latest news about
            CosmoRemit.
          </Text>
          <Flex
            align={"center"}
            justify={"center"}
            gap={["20px", "30px", "40px"]}
            mt={["20px", "25px", "30px"]}
          >
            <Image src={facebook} h={"40px"} />
            <Image src={twitte} h={"40px"} />
            <Image src={linked} h={"40px"} />
            <Image src={tube} h={"40px"} />
          </Flex>
        </Box>
      </Flex>
      <Divider />
      <Flex
        justify={"center"}
        gap={["10px", "15px", "20px"]}
        mt={["10px", "15px", "20px"]}
        direction={["column", "column", "row"]}
        textAlign={"center"}
      >
        <Text fontSize={["12px", "14px", "16px"]}>2025 @Cosmoremit</Text>
        <Text fontSize={["12px", "14px", "16px"]}>Privacy Policy</Text>
        <Text fontSize={["12px", "14px", "16px"]}>Terms & Conditions</Text>
        <Text fontSize={["12px", "14px", "16px"]}>Powered by BucketCodes</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
