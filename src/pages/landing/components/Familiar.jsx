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
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "256px 136px 460px 136px"]}
      bg={"#fff"}
    >
      <Flex align={"center"}justify={"space-between"}>
        <Box>
          <Text fontSize={"50px"} fontWeight={"bold"} maxW={"456px"}>
            Get Familiar with the name
          </Text>
          <Text py="20px" color={"#656565"} maxW={"456px"}>
            CosmoRemit is available in 30+ countries and counting, more
            countries to follow.
          </Text>
          <CustomButton
            btnText={"Sign-up today"}
            borderRadius={"50px"}
            rightIcon={<GoArrowUpRight />}
          />
        </Box>

        <Box position={"relative"}>
          <Flex>
            <motion.div
      animate={{ y: [0, -30, 30] }} // Moves the image up (-20px) and back down (0px)
      transition={{
        duration: 3,
        repeat: Infinity, 
        repeatType: "loop", 
        ease: "easeInOut", 
      }}
      style={{ display: "inline-block" }}
    >
      <Image src = {h1} h={"300px"}/>
    </motion.div>
    <motion.div
      animate={{ y: [0,30, -30] }} // Moves the image up (-20px) and back down (0px)
      transition={{
        duration: 3,
        repeat: Infinity, 
        repeatType: "loop",
        ease: "easeInOut", 
      }}
      style={{ display: "inline-block" }}
    >
         <Image src = {h2} h={"300px"}/>
         </motion.div>
          </Flex>


         <Flex position={"relative"}>
         <motion.div
      animate={{ y: [0, 30, -30] }} // Moves the image up (-20px) and back down (0px)
      transition={{
        duration: 3, 
        repeat: Infinity, 
        repeatType: "loop", 
        ease: "easeInOut", 
      }}
      style={{ display: "inline-block" }}
    >
       <Image src = {h3} h={"300px"}  zIndex={1}/>
    </motion.div>
         
    <motion.div
      animate={{ y: [0, -30, 30] }} // Moves the image up (-20px) and back down (0px)
      transition={{
        duration: 3, 
        repeat: Infinity, 
        repeatType: "loop", 
        ease: "easeInOut", 
      }}
      style={{ display: "inline-block",position:"absolute", left:370, bottom:50 }}
    >
      <Image src = {h4} h={"300px"}  zIndex={2}/>
    </motion.div>
         
         </Flex>
         
        </Box>


      </Flex>
    </Box>
  );
};

export default Familiar;
