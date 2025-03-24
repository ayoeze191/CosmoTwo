import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Image,
  VStack,
  Text,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const Country = () => {
  const carouselData = [
    {
      head: "Fast and Reliable Transfers",
      name: "Emeka",
      testimony:
        "I’ve been using Cosmosremit for over a year now, and I’m impressed by how fast my transfers are processed. My family receives money in minutes, and the  rates are always competitive. Highly recommend!",
    },

    {
      head: "Easy to use and secure",
      name: "Jane",
      testimony:
        "I’ve been using Cosmosremit for over a year now, and I’m impressed by how fast my transfers are processed. My family receives money in minutes, and the  rates are always competitive. Highly recommend!",
    },
    {
      head: "Easy to use and secure",
      name: "Aminat",
      testimony:
        "I’ve been using Cosmosremit for over a year now, and I’m impressed by how fast my transfers are processed. My family receives money in minutes, and the  rates are always competitive. Highly recommend!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <Box
      p={["20px 20px", "20px 20px", "20px 20px", "100px 150px"]}
      //   bgImage={Bg}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      // h={"700px"}
    >
      <Flex
        align={"center"}
        justify={"center"}
        gap={"50px"}
        flexDir={["column", "column", "column", "row"]}
      >
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize={"30px"}
            maxW={"300px"}
            textAlign={["center", "center", "center", "start"]}
          >
            What our 10,000+ users have to say
          </Text>
          <HStack
            spacing={5}
            mt="50px"
            justify={["center", "start", "start", "start"]}
          >
            <Button
              transform="translateY(-50%)"
              onClick={prevImage}
              borderRadius={"50px"}
              variant="unstyled"
              color="white"
              bg="rgba(0, 0, 0, 0.5)"
              _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
              zIndex="2"
            >
              <ChevronLeftIcon boxSize={8} />
            </Button>
            <Button
              transform="translateY(-50%)"
              onClick={nextImage}
              borderRadius={"50px"}
              variant="unstyled"
              color="white"
              bg="rgba(0, 0, 0, 0.5)"
              _hover={{ bg: "rgba(0, 0, 0, 0.8)" }}
              zIndex="2"
            >
              <ChevronRightIcon boxSize={8} />
            </Button>
          </HStack>
        </Box>

        <Box
          width={["350px", "500px"]}
          height="400px"
          px={"10px"}
          overflow="hidden"
          borderRadius="30px"
          boxShadow="lg"
          color={"#fff"}
          bg={"#FF0000"}
        >
          <Flex
            // width="100%"
            height="100%"
            transition="transform 0.5s ease-in-out"
            transform={`translateX(-${currentIndex * 100}%)`}
          >
            {carouselData.map((item, index) => (
              <Box
                key={index}
                width="100%"
                height="100%"
                flex="none"
                p={4}
                boxSizing="border-box"
              >
                <Text fontSize="25px" fontWeight="bold" py="20px">
                  {item.head}
                </Text>

                <Text fontSize="md" maxW={"400px"}>
                  {item.testimony}
                </Text>

                <Text fontSize="25px" fontWeight="bold" py={"20px"}>
                  {item.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Country;
