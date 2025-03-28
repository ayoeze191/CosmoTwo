import React, { useState, useEffect, useRef } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper-bundle.min.css';  // Correct CSS import
// import 'swiper/swiper.min.css';
// import Swiper from 'swiper/bundle';

// import styles bundle
import "swiper/css/bundle";
import { Pagination, Navigation } from "swiper/modules";

const Country = () => {
  // const testimonials = [
  //   {
  //     title: "Fast and Reliable Transfers",
  //     text: "I've been using the service for over a year now, and I'm impressed by how fast my transfers are processed. My family receives money in minutes, and the rates are always competitive. Highly recommend!",
  //     name: "Emeka O., Nigeria",
  //     bgColor: "blue.700",
  //     btnBg: "red.500"
  //   },
  //   {
  //     title: "Easy to Use & Secure",
  //     text: "The app is very simple to use. The transactions are fast, and I feel safe sending money across the world. Great service!",
  //     name: "Carlos M., Spain",
  //     bgColor: "red.700",
  //     btnBg: "blue.500"
  //   },
  //   // Add more testimonials as needed
  // ];

  useEffect(() => {
    if (cardContainerRef.current) {
      cardWidthRef.current = cardContainerRef.current.offsetWidth;
    }
  }, []);

  const carouselData = [
    {
      head: "Fast and Reliable Transfers",
      name: "Emeka O., Nigeria",
      bgColor: "#000080",
      nameColor: "#ff0000",
      testimony:
        "I’ve been using Cosmosremit for over a year now, and I’m impressed by how fast my transfers are processed. My family receives money in minutes, and the  rates are always competitive. Highly recommend!",
    },

    {
      head: "Easy to use and secure",
      name: "Carlos M., Spain",
      nameColor: "#000080",
      bgColor: "#ff0000",
      testimony:
        "I love how simple and user-friendly the Cosmosremit app is! Sending money abroad has never been easier, and I feel confident knowing my transactions are secure.Great service!",
    },
    {
      head: "Great Customer Service",
      name: "Fatimah S., U.A.E",
      bgColor: "#000080",
      nameColor: "#ff0000",
      testimony:
        "I had issues with one of ,my transfers, but the customer support team was very responsive and resolved it quickly. It's good to know there is always someone to help when needed",
    },
    {
      head: "Seamless Transaction",
      name: "Aisha T., USA",
      bgColor: "#ff0000",
      nameColor: "#000080",
      testimony:
        "I’ve tried several remittance services, but Cosmosremit stands out for its speed and reliabilty. My recipient always get their funds on time, and the process is hassle free",
    },
  ];

  const cardContainerRef = useRef(null);
  const cardWidthRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };
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
        gap={["20px", "30px", "40px", "50px"]}
        flexDir={["column", "column", "column", "row"]}
        textAlign={["center", "center", "center", "start"]}
      >
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize={["30px", "40px", "50px", "50px"]}
            maxW={["300px", "350px", "400px", "415px"]}
            lineHeight={"150%"}
          >
            What our 10,000+ users have to say
          </Text>
          <HStack
            spacing={[3, 4, 5]}
            mt={["30px", "40px", "50px"]}
            justify={["center", "center", "center", "start"]}
          >
            <Button
              transform="translateY(-50%)"
              onClick={prevImage}
              borderRadius={"50px"}
              variant="unstyled"
              color="white"
              border={"#656565 solid 1px "}
              // bg="rgba(0, 0, 0, 0.5)"
              _hover={{ bg: "#E6E6E6" }}
              zIndex="2"
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M7.26763 17.6732L8.47575 18.6248C10.433 20.1667 11.4116 20.9375 12.2058 20.5859C13 20.2343 13 19.03 13 16.6215V14.7183C13 12.3098 13 11.1056 12.2058 10.7539C11.4116 10.4023 10.433 11.1732 8.47575 12.7151L7.26775 13.6667C6.08925 14.595 5.5 15.0593 5.5 15.6699C5.5 16.2805 6.08925 16.7448 7.26763 17.6732Z"
                  fill="#656565"
                />
                <path
                  d="M7.26763 17.6732L8.47575 18.6248C10.433 20.1667 11.4116 20.9375 12.2058 20.5859C13 20.2343 13 19.03 13 16.6215V14.7183C13 12.3098 13 11.1056 12.2058 10.7539C11.4116 10.4023 10.433 11.1732 8.47575 12.7151L7.26775 13.6667C6.08925 14.595 5.5 15.0593 5.5 15.6699C5.5 16.2805 6.08925 16.7448 7.26763 17.6732Z"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 15.6699H25.5"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <Button
              transform="translateY(-50%)"
              onClick={nextImage}
              borderRadius={"50px"}
              variant="unstyled"
              // border={"#656565 solid 1px "}
              color="white"
              bg={"#E6E6E6"}
              // bg="rgba(0, 0, 0, 0.5)"
              // _hover={{ bg: "#E6E6E6" }}
              zIndex="2"
            >
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M23.7324 17.6732L22.5243 18.6248C20.567 20.1667 19.5884 20.9375 18.7942 20.5859C18 20.2343 18 19.03 18 16.6215V14.7183C18 12.3098 18 11.1056 18.7942 10.7539C19.5884 10.4023 20.567 11.1732 22.5243 12.7151L23.7323 13.6667C24.9108 14.595 25.5 15.0593 25.5 15.6699C25.5 16.2805 24.9107 16.7448 23.7324 17.6732Z"
                  fill="#010101"
                />
                <path
                  d="M23.7324 17.6732L22.5243 18.6248C20.567 20.1667 19.5884 20.9375 18.7942 20.5859C18 20.2343 18 19.03 18 16.6215V14.7183C18 12.3098 18 11.1056 18.7942 10.7539C19.5884 10.4023 20.567 11.1732 22.5243 12.7151L23.7323 13.6667C24.9108 14.595 25.5 15.0593 25.5 15.6699C25.5 16.2805 24.9107 16.7448 23.7324 17.6732Z"
                  stroke="#010101"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 15.6699H5.5"
                  stroke="#010101"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </HStack>
        </Box>

        <Box
          width={["100%", "100%", "100%", "50%"]}
          overflowX="auto"
          css={{
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            ref={cardContainerRef}
            width={["350px", "350px", "350px", "500px"]}
            transition="transform 0.5s ease-in-out"
            transform={`translateX(-${currentIndex * 85}%)`}
            // transform={`translateX(-${currentIndex * cardWidthRef.current}px)`}
            gap={["20px", "25px", "30px", "40px"]}
          >
            {carouselData.map((item, index) => (
              <Box
                key={index}
                p={["20px", "30px", "40px", "50px"]}
                gap={["15px", "20px", "25px", "30px", "50px"]}
                fontSize={["14px", "16px", "18px", "20px"]}
                // width={["300px", "350px", "400px", "400px"]}
                height={["400px", "400px", "400px", "638px"]}
                display={"flex"}
                // gap={"50px"}
                flexDirection={"column"}
                justifyContent={"center"}
                p="100px 50px"
                overflow="hidden"
                borderRadius="30px"
                boxShadow="lg"
                color={"#fff"}
                bg={item.bgColor || "#FF0000"}
                flexShrink={0}
              >
                <Text fontSize={"30px"} fontWeight="bold" lineHeight={"150%"}>
                  {item.head}
                </Text>

                <Text fontSize={"25px"} maxW={"400px"} fontWeight="bold">
                  {item.testimony}
                </Text>

                <Text
                  fontSize="30px"
                  lineHeight={"150%"}
                  fontWeight="bold"
                  py={"0px"}
                  bg={item.nameColor}
                  px="20px"
                  borderRadius={"50px"}
                  w={"fit-content"}
                >
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
