import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MobileHamBugerNav from "./MobileHamBurgerNav";
import { CustomButton } from "./CustomButton";
import { IoLockClosedOutline } from "react-icons/io5";
import logo from "../assets/logo.png"

const  Navigation =({bg, color, iconColor,loginColor, loginTextColor, border})=> {
  return (
    <Flex
      alignItems={"center"}
      fontFamily={"Inter, sans-serif"}
      justifyContent="space-between"
      fontWeight="500"
      borderRadius={"50px"}
      fontSize={[".9em", "1.1em"]}
      flexDir={"row"}
      bg={bg ||"white" }
      border={border}
      gap={["20px", "20px", "20px", "unset"]}
      // p="20px 150px"
      p={["20px 30px", "20px 30px", "20px 30px", "20px 20px"]}
      h="60px"
    >
      <Link to={"/"}>
        <Flex gap={"2"} alignItems={"center"}>
          <Img loading="lazy" src={logo} alt="logo" h={"30px"} />
        </Flex>
      </Link>

      <MobileHamBugerNav display={["block", "block", "block", "none"]} />
      <>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap={["20px", "70px"]}
          color={color}
        >
           <Link to={"/"}>
            <Text color={color} fontSize={"13px"} fontWeight={"bold"}>Home</Text>
          </Link>
          <Link to={"/pricing"}>
            <Text color={color} fontSize={"13px"} fontWeight={"bold"}>About us</Text>
          </Link>
          <Link to={"/pricing"}>
            <Text color={color} fontSize={"13px"} fontWeight={"bold"}>Contact us</Text>
          </Link>
          <Link to={"/faq"}>
            <Text color={color} fontSize={"13px"} fontWeight={"bold"}>FAQ</Text>
          </Link>
          <Link to={"/help-center"}>
            <Text color={color} fontSize={"13px"} fontWeight={"bold"}>Help center</Text>
          </Link>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap="50px"
        >
          <CustomButton
            color={loginTextColor}
            borderRadius="50px"
            btnText={"Sign-in"}
            // px="35px"
            bg={"red"}
            leftIcon={<IoLockClosedOutline color={loginColor} />}
          />
        </Flex>
      </>
    </Flex>
  );
}

export default Navigation;
