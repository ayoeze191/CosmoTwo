import { Box, Image, Text } from "@chakra-ui/react";
import Navigation from "../../components/Nav";
import AboutHerobg from "./../../assets/abouthero.webp";
import userFriendly from "./../../assets/AboutUs/userfriendly.webp";
import CustomerSupport from "./../../assets/AboutUs/Customer-Support.webp";
import globe from "./../../assets/AboutUs/globe.webp";
import Security from "./../../assets/AboutUs/Security.webp";
import Rates from "./../../assets/AboutUs/Rates.webp";
import Frame from "./../../assets/AboutUs/Frame.webp";
import apple from "./../../assets/AboutUs/apple.svg";
import google from "./../../assets/AboutUs/google.svg";

const benefits = [
  {
    title: "User-Friendly Platform",
    description:
      "CosmoRemit provides an intuitive online platform and a mobile app, allowing users to register in less than five minutes and initiate transfers swiftly.",
    image: userFriendly,
  },
  {
    title: "Global Reach",
    description:
      "With a vast network of financial partners, CosmoRemit enables transfers to numerous countries, supporting a wide range of currencies.",
    image: globe,
  },
  {
    title: "Customer Support",
    description:
      " A dedicated support team is available to assist users with any inquiries or issues related to their transfers.",
    image: CustomerSupport,
  },
  {
    title: "Competitive Rates",
    description:
      "The service offers favorable exchange rates and low fees, ensuring that more of your money reaches its intended destination.",
    image: Rates,
  },
  {
    title: "Security and Compliance",
    description:
      "Utilizing advanced encryption and adhering to international financial regulations, CosmoRemit ensures the safety and compliance of all transactions.",
    image: Security,
  },
];
const About = () => {
  return (
    <Box>
      <Box p={["10px", "20px", "30px", "5vw"]}>
          <Navigation border={"1px solid #ff0000"} />
      </Box>
      <Box
        position={"relative"}
        height={["200px", "300px", "400px", "25vw"]}
        // m={["2rem 0 0 0", "3rem 0 0 0", "4rem 0 0 0"]}
      >
        <Box
          bgColor={"#01010180"}
          zIndex={-10}
          height={"100%"}
          top={0}
          left={0}
          position={"absolute"}
          w={"100%"}
        >
          <Image
            src={AboutHerobg}
            alt=""
            h={"100%"}
            w={"100%"}
            objectFit="cover"
          />
        </Box>
        <Box
          p={["30px 0", "50px 0", "100px 0"]}
          zIndex={9999}
          top={0}
          left={0}
          textAlign="center"
        >
          <Text
            color={"#FEFEFE"}
            fontWeight={400}
            fontSize={["1.2em", "1.8em", "2.5em", "3.5em"]}
          >
            About Us
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={["column", "column", "row"]}
        gap={["10px", "20px", "3vw"]}
        p={["10px", "20px", "3vw"]}
        maxWidth={1191}
        margin={["20px auto", "50px auto", "5vw auto"]}
      >
        <Box flex={1}>
          <Text
            textAlign={"center"}
            color={"#000000"}
            fontWeight={"bold"}
            lineHeight={"150%"}
            fontSize={["1rem", "1.2rem", "1.5rem", "2rem"]}
          >
            Fast, secure, affordable international transfers from anywhere.
          </Text>
        </Box>
        <Box flex={1}>
          <Text
            textAlign={"center"}
            fontWeight={"medium"}
            color={"#656565"}
            fontSize={["0.8rem", "0.9rem", "1rem", "1.2rem"]}
          >
            At <span style={{color:"#ff0000"}}>CosmoRemit,</span> we make international money transfers fast, secure,
            and affordable. Based in Australia, we are committed to providing a
            seamless and hassle-free remittance experience for individuals and
            businesses. Whether you're sending money to support family, pay for
            services, or manage global transactions, our platform ensures your
            funds reach their destination quickly and safely.
          </Text>
        </Box>
      </Box>
      <Box
        maxWidth={"1529.544677734375px"}
        margin={"0 auto"}
        display={"grid"}
        gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={["10px", "15px", "2vw"]}
        p={["10px", "20px", "3vw"]}
      >
        {benefits.map((ben) => (
          <Benefit key={ben.title} {...ben} />
        ))}
      </Box>

      <Box
        margin={["50px auto", "80px auto", "5vw auto"]}
        position={"relative"}
        padding={["50px", "30px", "5vw"]}
      >
        <Box
          position={"absolute"}
          top={0}
          left={0}
          height={"100%"}
          width={"100%"}
        >
          <Image src={Frame} alt="" height={"100%"} width={"100%"} />
        </Box>
        <Box
          background={"#FEFEFE"}
          maxWidth={"1448px"}
          textAlign={"center"}
          width={"fit-content"}
          margin={"0 auto"}
          position={"relative"}
          borderRadius={"100px"}
          padding={["50px", "50px", "50px"]}
        >
          <Text
            fontWeight={"bold"}
            fontSize={["2rem", "3rem", "4rem", "3rem"]}
            color={"red.500"}
          >
            Get Our App - Send
            <br />
            Money on the Go!
          </Text>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={["20px", "30px", "3vw"]}
            mt={["50px", "70px", "5vw"]}
          >
            <Box>
              {" "}
              <Image src={apple} alt="" h={"50px"}/>
            </Box>
            <Box>
              {" "}
              <Image src={google} alt="" h={"50px"}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

const Benefit = ({ image, title, description }) => {
  return (
    <Box
      padding={"20px"}
      background={"#F6F6F6"}
      borderRadius={10}
      width={"100%"}
    >
      <Box width={"100%"}>
        <Image src={image} alt="" width={"100%"} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        marginTop={50}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"1.56rem"}
          lineHeight={"150%"}
          color={"#010101"}
        >
          {title}
        </Text>
        <Text
          fontWeight={"normal"}
          fontSize={"1.rem"}
          lineHeight={"150%"}
          color={"#656565"}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};
