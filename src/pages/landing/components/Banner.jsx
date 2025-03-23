import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import banner from "../../../assets/banner.png"
import bannerImg from "../../../assets/bannerImg.png"
import s1 from "../../../assets/s1.png"
import s2 from "../../../assets/s2.png"
import s3 from "../../../assets/s3.png"
import f1 from "../../../assets/f1.png"
import f2 from "../../../assets/f2.png"
import f3 from "../../../assets/f3.png"
import f4 from "../../../assets/f4.png"

const Banner = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "50px 150px"]}
      bgImage={banner}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
        <Flex align={"center"} justifyContent={"center"} gap={"200px"}>
            <Box>
                <Box position={"relative"} h={"500px"}>
                <Image src={bannerImg} h={"500px"} borderTopRadius={"50%"}/>
                <Box position={"absolute"} bottom={400} left={250}>
                    <Image src={s1} />
                </Box>
                <Box position={"absolute"} bottom={200} left={5}>
                    <Image src={s2} />
                </Box>
                <Box position={"absolute"} bottom={5} left={230}>
                    <Image src={s3} />
                </Box>
                </Box>
                
            </Box>
            <Box color={"#fff"}>
                <Text fontSize={"30px"} fontWeight={"bold"} maxW={"400px"}>
                    Ready to make your first international transfer?
                </Text>
                <Text maxW={"400px"} pt={"20px"} fontWeight={100}>
                Follow these simple 4 steps to start sending money
                to your loved ones
                </Text>
                <Flex mt={"50px"} gap={"70px"}>
                    <Box>
                        <Image src={f1} h={"50px"}/>
                        <Text maxW={"80px"} pt={"10px"} fontWeight={100}>sign up or log in</Text>
                    </Box>
                    <Box>
                        <Image src={f2} h={"50px"}/>
                        <Text maxW={"130px"} pt={"10px"} fontWeight={100}>Enter transfer details</Text>
                    </Box>
                    <Box>
                        <Image src={f3} h={"50px"}/>
                        <Text maxW={"100px"} pt={"10px"} fontWeight={100}>Add recipient details</Text>
                    </Box>
                    <Box>
                        <Image src={f4} h={"50px"}/>
                        <Text maxW={"150px"} pt={"10px"} fontWeight={100}>make payment</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>


    </Box>
  );
};

export default Banner;
