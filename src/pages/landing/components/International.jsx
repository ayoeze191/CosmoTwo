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
      h={["auto", "auto" ]}
      flexDirection={"column"}
    >

      <Flex justify={"space-between"} align={"center"} mb={"50px"}>
      <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
          transition={{ duration: 2, ease: "easeInOut" }} // Smooth fade-in transition
        >
          <Image src={audM}  />
        </motion.div>
        
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
          transition={{ duration: 2, ease: "easeInOut" }} // Smooth fade-in transition
        >
          <Image src={gbpM}  />
        </motion.div>
        
      </Flex>
      <motion.div
        style={{
          display: "inline-block",
          textAlign:"center",
          fontSize: "24px",
          fontWeight: "bold",
        }}

        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }} // Continuous fade in/out
        // style={{ display: "inline-block", fontSize: "24px", fontWeight: "bold" }}
      >
        <motion.span
          initial={{ x: -50}} // Starts off-screen to the left
          animate={{ x: 0 }} // Moves to its position
          // exit={{ opacity: 0 }} 
          transition={{
            duration: 2, // Slower movement (2 seconds)
            repeat: Infinity,
            // ease: "easeInOut",
            repeatType: "mirror",
          }}
          style={{ display: "inline-block" }}
        >
          <Flex gap={"10px"} align={"center"}>
            <Text
              fontSize={["20px", "25px", "30px", "40px"]}
              fontWeight={"bold"}
              maxW={"1322px"}
              textAlign={"center"}
            >
              You can now send money{" "}
            </Text>
            <motion.span 
              initial={{ x: 0, opacity:0 }} // Starts off-screen to the left
              animate={{ x: 0, opacity: 1 }} // Moves to its position
              exit={{ opacity: 0 }} 
              transition={{
                duration: 2, // Slower movement (2 seconds)
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
              style={{ display: "inline-block" }}
            >
            <Text fontSize={"45px"} color={"#ff0000"} textAlign={"center"} fontWeight={"extrabold"}>
              {words[textIndex]}
            </Text>
            </motion.span>
          </Flex>
        </motion.span>
        <motion.span
          initial={{ x: 50 }} // Starts off-screen to the right
          animate={{ x: -50 }} // Moves to its position
          transition={{
            duration: 2, // Slower movement (2 seconds)
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{ display: "inline-block" }}
        >
          <Text fontSize={["20px", "25px", "30px", "40px"]} fontWeight={"bold"} textAlign={"center"}>
            in these currencies
          </Text>
        </motion.span>
      </motion.div>
      <Flex justify={"space-between"} align={"center"} mt={"50px"}>
      <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
          transition={{ duration: 2, ease: "easeInOut" }} // Smooth fade-in transition
        >
          <Image src={usdM}  />
        </motion.div>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
          transition={{ duration: 2, ease: "easeInOut" }} // Smooth fade-in transition
        >
          <Image src={cadM}  />
        </motion.div>
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0 }} // Initially hidden
          animate={{ opacity: inView ? 1 : 0 }} // Fade in when in view
          transition={{ duration: 2, ease: "easeInOut" }} // Smooth fade-in transition
        >
           <Image src={nzdM}  />
        </motion.div>
       
      </Flex>
    </Flex>
  );
};

export default International;
