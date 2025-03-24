// import { Button } from "@chakra-ui/button"
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// import React from "react"

export const CustomButton = ({
  leftIcon,
  py,
  px,
  bg,
  color,
  hover,
  onClick,
  borderRadius,
  border,
  mr,
  mx,
  w,
  btnText,
  fontSize,
  my,
  rightIcon,
}) => {
  const navigate = useNavigate();
  return (
    <Button
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      fontSize={fontSize || "1rem"}
      fontFamily={"Inter, sans-serif"}
      py={py}
      mx={mx}
      px={px}
      bg={bg || "#FF0000"}
      color={color || "white"}
      _hover={{ hover }}
      onClick={() => {
        navigate("/pre-login");
      }}
      borderRadius={borderRadius}
      border={border}
      mr={mr}
      my={my}
      w={w}
      outline={"none"}
    >
      {btnText}
    </Button>
  );
};
