import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "../../../components/Nav";
import Bg from "../../../assets/homeBg.png";
import { CustomButton } from "../../../components/CustomButton";

const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bgImage={Bg}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"700px"}
    >
      <Navigation />

      <Flex mt="100px"justify={"center"} gap={"50px"}>
        <Box color={"#fff"}>
          <CustomButton
            btnText={"Regulated by AUSTRAC"}
            bg={"none"}
            border={"1px solid white"}
            borderRadius={"50px"}
          />
          <Text fontSize={"50px"} fontWeight={"bold"} maxW={"500px"} pt="30px">
            Send Money Seamlessly Across Borders
          </Text>
          <Text fontWeight={"medium"} py="20px" maxW={"500px"}>
            Our industry-leading technology protects your money and guarantees
            it arrives safely everytime
          </Text>
          <Flex>
            <CustomButton btnText={"Sign-in to get started"} borderRadius={"50px"} px={"30px"}/>
          </Flex>
        </Box>

        <Box p={"20px"} bg={"#fff"} borderRadius={"10px"} flex={0.6}>
            <Text textAlign={"center"} color={"#FF0000"}>Best rate guarantee | <span style={{fontWeight:"500"}}>New customer rate-980 NGN</span></Text>
            <Flex justify={"center"}>
                <Text bg={"#FFE6E6"} px={"10px"} color={"#FF0000"} borderRadius={"50px"}><span style={{fontWeight:"500"}}>Rate</span> - 1 AUD = 985 NGN</Text>
            </Flex>

            <Flex borderRadius={"50px"} border={"1px solid #eee"} px={"15px"} align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text>You send</Text>
                    <Text fontWeight={"medium"}>0.00</Text>
                </Box>
                <Box border={"1px solid #eee"} borderRadius={"50px"}>
                    AUD
                </Box>
            </Flex>
            <Flex fontSize={"14px"} align={"center"} justify={"space-between"} my="20px">
                <Text >Fee</Text>
                <Text color={"#FF0000"} fontWeight={"bold"}>3 AUD</Text>
            </Flex>

            <Flex borderRadius={"50px"} border={"1px solid #eee"} px={"15px"} align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text>Beneficiary receive</Text>
                    <Text fontWeight={"medium"}>0.00</Text>
                </Box>
                <Box border={"1px solid #eee"} borderRadius={"50px"}>
                    NGN
                </Box>
            </Flex>
            <Flex borderRadius={"50px"} border={"1px solid #eee"} px={"15px"} align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text fontWeight={"medium"}>Payment Method</Text>
                    <Text >select a pament method</Text>
                </Box>
                <Box border={"1px solid #eee"} borderRadius={"50px"}>
                    Aud
                </Box>
            </Flex>

            <Flex my="20px" justify={"center"}>
                <CustomButton btnText={"send money"} w={"full"} borderRadius={"50px"}/>
            </Flex>

        </Box>

      </Flex>
    </Box>
  );
};

export default Hero;
