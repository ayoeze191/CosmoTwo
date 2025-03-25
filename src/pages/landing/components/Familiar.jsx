import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "../../../components/CustomButton";
import { GoArrowUpRight } from "react-icons/go";
import h1 from "../../../assets/h1.png";
import h2 from "../../../assets/h2.png";
import h3 from "../../../assets/h3.png";
import h4 from "../../../assets/h4.png";
import { motion } from "framer-motion";

const Familiar = () => {
  return (
    <Box p={["20px", "20px", "40px", "256px 136px 460px 136px"]} bg={"#fff"}>
      <Flex
        align={"center"}
        justify={"space-between"}
        direction={["column", "column", "row"]}
      >
        <Box textAlign={["center", "center", "left"]}>
          <Text
            fontSize={["30px", "40px", "50px"]}
            fontWeight={"bold"}
            maxW={["100%", "100%", "456px"]}
          >
            Get Familiar with the name
          </Text>
          <Text
            py="20px"
            color={"#656565"}
            maxW={["100%", "100%", "456px"]}
            fontSize={["14px", "16px", "18px"]}
          >
            CosmoRemit is available in 30+ countries and counting, more
            countries to follow.
          </Text>
          <CustomButton
            btnText={"Sign-up today"}
            borderRadius={"50px"}
            rightIcon={<GoArrowUpRight />}
          />
        </Box>

        <Box position={"relative"} mt={["20px", "20px", "0"]}>
          <Flex justify={"center"} flexWrap={"wrap"}>
            <motion.div
              animate={{ y: [30, -30, 30] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{ display: "inline-block", margin: "10px" }}
            >
              <Image src={h1} h={["150px", "200px", "300px"]} />
            </motion.div>
            <motion.div
              animate={{ y: [-30, 30, -30] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{ display: "inline-block", margin: "10px" }}
            >
              <Image src={h2} h={["150px", "200px", "300px"]} />
            </motion.div>
          </Flex>

          <Flex
            position={"relative"}
            justify={"center"}
            flexWrap={"wrap"}
            mt={["20px", "20px", "0"]}
          >
            <motion.div
              animate={{ y: [-30, 30, -30] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{ display: "inline-block", margin: "10px" }}
            >
              <Image src={h3} h={["150px", "200px", "300px"]} zIndex={1} />
            </motion.div>

            <motion.div
              animate={{ y: [30, -30, 30] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                position: "absolute",
                left: ["50%", "50%", "370px"],
                bottom: ["-20px", "-20px", "50px"],
                transform: ["translateX(-50%)", "translateX(-50%)", "none"],
              }}
            >
              <Image src={h4} h={["150px", "200px", "300px"]} zIndex={2} />
            </motion.div>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Familiar;
