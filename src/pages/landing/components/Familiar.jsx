import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { CustomButton } from '../../../components/CustomButton'
import { GoArrowUpRight } from "react-icons/go";

const Familiar = () => {
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "50px 150px"]} bg={"#fff"}>
         <Text  fontSize={"30px"} fontWeight={"bold"} maxW={"300px"}>Get Familiar with the name</Text>
         <Text py="20px" color={"#656565"} maxW={"400px"}>CosmoRemit is available in 30+ countries and counting,
         more countries to follow.</Text>
         <CustomButton btnText={"Sign-up today"} borderRadius={"50px"} rightIcon={<GoArrowUpRight />}/>
    </Box>
  )
}

export default Familiar