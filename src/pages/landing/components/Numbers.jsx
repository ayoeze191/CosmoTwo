import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import pounds from "../../../assets/pounds.png"
import users from "../../../assets/users.png"
import youtube from "../../../assets/youtube.png"

const Numbers = () => {
  return (
    <Flex 
    p={["20px 20px", "20px 20px", "20px 20px", "50px 150px"]}
    bg={"#fff"}
    justifyContent={["center"]}
    flexWrap={"wrap"}
    gap={["30px","30px","30px","100px"]}
    >
        <Box>
            <Image src={pounds} />
            <Text fontWeight={"bold"} py="10px">200K+</Text>
            <Text color={"#656565"} fontSize={"14px"} maxW={"250px"}>Over 200,000+ Successful Transactions
            and Counting</Text>
        </Box>
        <Box>
            <Image src={youtube} />
            <Text fontWeight={"bold"} py="10px">$15m+</Text>
            <Text color={"#656565"} fontSize={"14px"} maxW={"250px"}>Over $15 Million+ Money Remitted
            Successfully!</Text>
        </Box>
        <Box>
            <Image src={users} />
            <Text fontWeight={"bold"} py="10px">10k+</Text>
            <Text color={"#656565"} fontSize={"14px"} maxW={"250px"}>Trusted by 10,000+ Users Worldwide!</Text>
        </Box>

    </Flex>
  )
}

export default Numbers