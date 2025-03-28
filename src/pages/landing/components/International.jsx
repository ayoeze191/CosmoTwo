import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useState, useEffect } from "react";
import audM from "../../../assets/audM.png";
import gbpM from "../../../assets/gbpM.png";
import usdM from "../../../assets/usdM.png";
import cadM from "../../../assets/cadM.png";
import nzdM from "../../../assets/nzdM.png";

const International = () => {
  const words = ["INTERNATIONALLY", "INSTANTLY", "WITHOUT HASSEL"];
  const [textIndex, setTextIndex] = useState(0);
  const imageRef = useRef(null); // Create a reference for the image
  const inView = useInView(imageRef, { triggerOnce: true, threshold: 0.5 }); // Image fades in when 50% is in view

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <Flex
      p={["20px", "20px", "50px", "100px 150px"]}
      bg={"#fff"}
      // justify={"center"}
      // align={"center"}
      h={["auto", "auto"]}
      flexDirection={"column"}
    >
      <Flex justify={"space-between"} align={"center"} mb={["20px","20px","20px","50px"]}>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          whileHover={{ y: [0, -10, 0, -10, 0] }} 
          transition={{
            duration: 1.5, 
            ease: "easeInOut", 
            // repeat: Infinity, // 
            // repeatType: "loop", // Continuous loop
          }}
        >
          <Image src={audM} />
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          whileHover={{ y: [0, -10, 0, -10, 0] }} 
          transition={{
            duration: 1.5, 
            ease: "easeInOut", 
            // repeat: Infinity, // 
            // repeatType: "loop", // Continuous loop
          }}
        >
          <Image src={gbpM} />
        </motion.div>
      </Flex>









       
          <Flex gap={["5px","5px","5px","10px"]} align={"center"} justify={"center"}> 
            <Text
              fontSize={["18px", "25px", "30px", "40px"]}
              fontWeight={"bold"}
              // pl={"20px"}
              maxW={"1322px"}
              textAlign={"center"}
            >
              You can now send money{" "}
            </Text>
            <motion.span
              initial={{ x: 0, opacity: 0 }} // Starts off-screen to the left
              animate={{ x: 0, opacity: 1 }} // Moves to its position
              exit={{ opacity: 0 }}
              transition={{
                duration:  1, // Slower movement (2 seconds)
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              style={{ display: "inline-block" }}
            >
              <Text
                fontSize={["18px", "25px", "30px", "45px"]}
                color={"#ff0000"}
                textAlign={"center"}
                fontWeight={"extrabold"}
              >
                {words[textIndex]}
              </Text>
            </motion.span>
          
          <Text
            fontSize={["18px", "25px", "30px", "40px"]}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            in these currencies
          </Text>
          </Flex>




    <Flex justify={"space-between"} align={"center"} mt={["20px","20px","20px","50px"]}>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          whileHover={{ y: [0, -10, 0, -10, 0] }} 
          transition={{
            duration: 1.5, 
            ease: "easeInOut", 
            // repeat: Infinity, // 
            // repeatType: "loop", // Continuous loop
          }}
        >
          <Image src={usdM} />
        </motion.div>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} 
          animate={{ opacity: inView ? 1 : 0 }} 
          whileHover={{ y: [0, -10, 0, -10, 0] }} 
          transition={{
            duration: 1.5, 
            ease: "easeInOut", 
            // repeat: Infinity, // 
            // repeatType: "loop", // Continuous loop
          }}
        >
          <Image src={cadM} />
        </motion.div>
        <motion.div
           ref={imageRef}
           initial={{ opacity: 0 }} 
           animate={{ opacity: inView ? 1 : 0 }} 
           whileHover={{ y: [0, -10, 0, -10, 0] }} 
           transition={{
             duration: 1.5, 
             ease: "easeInOut", 
            //  repeat: Infinity, // 
             // repeatType: "loop", // Continuous loop
           }}
        >
          <Image src={nzdM} />
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default International;
