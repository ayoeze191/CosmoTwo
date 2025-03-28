import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileHamBugerNav from "./MobileHamBurgerNav";
import { CustomButton } from "./CustomButton";
import { IoLockClosedOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { useLocation } from "react-router-dom";

const Navigation = ({
  bg,
  color,
  iconColor,
  loginColor,
  loginTextColor,
  border,
}) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
      width={"100%"}
      border={border}
      gap={["20px", "20px", "20px", "unset"]}
      p={["20px 30px", "20px 30px", "20px 30px", "34px 20px"]}
      h="60px"
    >
      <Link to={"/"}>
        <Flex gap={"2"} alignItems={"center"} height={"fit-content"}>
          <Img
            loading="lazy"
            src={logo}
            alt="logo"
            h={["20px", "20px", "20px", "42px"]}
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
          gap={["10px", "15px", "15px", "30px", "50px"]}
          color={color}
        >
          <Link to={"/"}>
            <Text
              color={isActive("/") ? "red" : color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              Home
            </Text>
          </Link>
          <Link to={"/about-us"}>
            <Text
              color={isActive("/about-us") ? "red" : color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              About us
            </Text>
          </Link>
          <Link to={"/contact-us"}>
            <Text
              color={isActive("/contact-us") ? "red" : color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              Contact us
            </Text>
          </Link>
          <Link to={"/faq"}>
            <Text
              color={isActive("/faq") ? "red" : color}
              fontSize={["14px", "16px", "18px", "18px"]}
              fontWeight={"bold"}
            >
              FAQ
            </Text>
          </Link>
          <Link to={"/help-center"}>
            <Text
              color={isActive("/help-center") ? "red" : color}
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
            bg={"red"}
          />
        </Flex>
      </>
    </Flex>
  );
};

export default Navigation;
