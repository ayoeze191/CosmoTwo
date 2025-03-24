import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileHamBugerNav from "./MobileHamBurgerNav";
import { CustomButton } from "./CustomButton";
import { IoLockClosedOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { GoArrowUpRight } from "react-icons/go";

const Navigation = ({
  bg,
  color,
  iconColor,
  loginColor,
  loginTextColor,
  border,
}) => {
  return (
    <Flex
      alignItems={"center"}
      fontFamily={"Inter, sans-serif"}
      justifyContent="space-between"
      fontWeight="500"
      borderRadius={"50px"}
      fontSize={[".9em", "1.1em"]}
      flexDir={"row"}
      bg={bg || "white"}
      border={border}
      gap={["20px", "20px", "20px", "unset"]}
      // p="20px 150px"
      p={["20px 30px", "20px 30px", "20px 30px", "20px 20px"]}
      h="60px"
    >
      <Link to={"/"}>
        <Flex gap={"2"} alignItems={"center"}>
          <Img
            loading="lazy"
            src={logo}
            alt="logo"
            h={["20px", "20px", "20px", "30px"]}
          />
        </Flex>
      </Link>

      <MobileHamBugerNav
        display={["block", "block", "block", "none"]}
        color={color}
      />
      <>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap={["10px", "15px", "30px", "50px"]}
          color={color}
        >
          <Link to={"/"}>
            <Text
              color={color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              Home
            </Text>
          </Link>
          <Link to={"/about-us"}>
            <Text
              color={color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              About us
            </Text>
          </Link>
          <Link to={"/contact-us"}>
            <Text
              color={color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              Contact us
            </Text>
          </Link>
          <Link to={"/faq"}>
            <Text
              color={color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              FAQ
            </Text>
          </Link>
          <Link to={"/help-center"}>
            <Text
              color={color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              Help center
            </Text>
          </Link>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap={["15px", "20px", "30px", "40px"]}
        >
          <CustomButton
            color={loginTextColor}
            rightIcon={<GoArrowUpRight />}
            borderRadius="50px"
            btnText={"Sign-in"}
            // px="35px"
            bg={"red"}
            // leftIcon={<IoLockClosedOutline color={loginColor} />}
          />
        </Flex>
      </>
    </Flex>
  );
};

export default Navigation;
