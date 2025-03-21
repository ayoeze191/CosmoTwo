import React from "react";
import Navigation from "../../../components/Nav";
import { Box } from "@chakra-ui/react";

const First = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "50px 150px"]}
      bg={"#fff"}
    >
        <Navigation border={"1px solid #FF0000"} />
    </Box>
  );
};

export default First;
