import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import banner from "../../../assets/banner.png";
import bannerImg from "../../../assets/bannerImg.png";
import s1 from "../../../assets/s1.png";
import s2 from "../../../assets/s2.png";
import s3 from "../../../assets/s3.png";
import f1 from "../../../assets/f1.png";
import f2 from "../../../assets/f2.png";
import f3 from "../../../assets/f3.png";
import f4 from "../../../assets/f4.png";

const Banner = () => {
  return (
    <Box
      p={["20px", "20px", "30px", "50px 150px"]}
      bgImage={banner}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <Flex
        align={"center"}
        justifyContent={"center"}
        gap={["30px", "40px", "50px", "200px"]}
        flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
      >
        <Box>
          <Box position={"relative"} h={["100%", "100%", "100%"]}>
            <Image
              src={bannerImg}
              h={"100%"}
              borderTopRadius={"50%"}
              w={"100%"}
            />
            <Box
              position={"absolute"}
              //   bottom={["250px", "300px", "400px"]}
              // left={["150px", "200px", "250px"]}
              right={"0"}
              top={"66px"}
            >
              <Image src={s1} />
            </Box>
            <Box
              position={"absolute"}
              bottom={["100px", "150px", "200px"]}
              left={["5px", "10px", "20px"]}
            >
              <Image src={s2} />
            </Box>
            <Box
              position={"absolute"}
              bottom={["5px", "10px", "40px"]}
              //   left={["100px", "150px", "230px"]}
              right={"34px"}
            >
              <Image src={s3} />
            </Box>
          </Box>
        </Box>
        <Box color={"#FEFEFE"}>
          <Text
            fontSize={["24px", "30px", "36px", "40px"]}
            lineHeight={"150%"}
            fontWeight={"bold"}
            maxW={["auto", "auto", "auto", "400px"]}
            textAlign={["center", "center", "center", "start"]}
          >
            Ready to make your first international transfer?
          </Text>
          <Text
            maxW={"436px"}
            m={["0 auto", "0 auto", "0 auto", "0"]}
            pt={"20px"}
            fontSize={["14px", "16px", "18px"]}
            fontWeight={100}
            textAlign={["center", "center", "center", "start"]}
          >
            Follow these simple 4 steps to start sending money to your loved
            ones
          </Text>
          <Flex
            mt={"50px"}
            gap={["20px", "50px", "100px"]}
            flexWrap={"wrap"}
            justify={["center", "center", "center", "start"]}
          >
            <Box
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Image src={f1} h={["40px", "45px", "50px"]} />
              <Text
                maxW={"89px"}
                textAlign={["center", "center", "center", "start"]}
                fontWeight={700}
                fontSize={["14px", "16px", "18px"]}
              >
                sign up or log in
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Image src={f2} h={["40px", "45px", "50px"]} />
              <Text
                maxW={"130px"}
                textAlign={["center", "center", "center", "start"]}
                fontWeight={700}
                fontSize={["14px", "16px", "18px"]}
                color={"#FEFEFE"}
              >
                Enter transfer details
              </Text>
            </Box>
            <Box
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={"20px"}
              maxW={"119px"}
            >
              <Image src={f3} h={["40px", "45px", "50px"]} />
              <Text
                maxW={"124px"}
                textAlign={["center", "center", "center", "start"]}
                fontWeight={700}
                fontSize={["14px", "16px", "18px"]}
                color={"#FEFEFE"}
              >
                Add recipient details
              </Text>
            </Box>
            <Box
              display={"flex"}
              gap={"20px"}
              flexDir={"column"}
              alignItems={"center"}
            >
              <Image src={f4} h={["40px", "45px", "50px"]} />
              <Text
                maxW={"150px"}
                pt={"10px"}
                textAlign={["center", "center", "center", "start"]}
                fontWeight={700}
                fontSize={["14px", "16px", "18px"]}
                color={"#FEFEFE"}
              >
                make payment
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Banner;
