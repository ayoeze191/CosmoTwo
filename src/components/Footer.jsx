import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import facebook from "../assets/facebook.png"
import pm from "../assets/pm.png"
import tube from "../assets/tube.png"
import twitte from "../assets/twitte.png"
import linked from "../assets/linked.png"
import location from "../assets/location.png"
import internet from "../assets/internet.png"

const Footer = () => {
  return (
    <Box p={["20px 20px", "20px 20px", "20px 20px", "50px 150px"]} bg={"#000"} color={"#fff"}>
        <Text fontWeight={"bold"} fontSize={"30px"}>CosmoRemit</Text>
        <Text fontSize={"15px"}>Fintech solution</Text>
        <Flex justify={"flex-end"} mb="20px">
            <Box>
            <Text fontSize={"15px"}>We are a proud member of</Text>
            <Flex justify={"center"} mt="10px">
            <Image src={pm} h="50px" />
            </Flex>
            </Box>
        </Flex>
        <Divider />
        <Flex my="30px" justify={"space-between"} mx="30px" flexWrap={"wrap"}>
            <Box w={"300px"}>
                <Flex justify={"center"} gap={5} align={"center"} bg={"#fff"} p="10px" borderRadius={"8px"} textAlign={"center"} mb="20px">
                    <Image src={location}  h={"30px"}/>
                    <Text color={"#000"} fontWeight={"medium"}>Australia Contact Info</Text>
                </Flex>
                <Text>Address: Floor 14 153 MacQuarie Street</Text>
                <Text>City: Parramatta</Text>
                <Text>Postcode: 2150</Text>
                <Text>Country: Australia</Text>
                <Box my="10px">
                    <Divider />
                </Box>
                <Text>Swift Code: CSPYAU22</Text>
                <Text>Bank: CosmoRemit PTY LTD</Text>
                <Box my="10px">
                    <Divider />
                </Box>
                <Text>(02) 96 159 832</Text>
                <Text>(+61) 414 151 549</Text>
                <Text>(+61) 470 628 369</Text>
                <Box my="10px">
                    <Divider />
                </Box>
                <Text>admin@cosmoremit.com.au</Text>
            </Box>

            <Box w={"300px"} my={["30px","30px","30px","0px"]}>
                <Flex justify={"center"} gap={5} align={"center"} bg={"#fff"} p="10px" borderRadius={"8px"} textAlign={"center"} mb="20px">
                <Image src={location}  h={"30px"}/>
                    <Text color={"#000"} fontWeight={"medium"}>New Zealand Contact Info</Text>
                </Flex>
                <Text>Address: 2/83 Sutherland Street </Text>
                <Text>City: Dunedin Central</Text>
                <Text>Postcode: 9016</Text>
                <Text>Country: New Zealand</Text>
                <Box mt="10px">
                    <Divider />
                </Box>
                <Text>(+64) 448 812 66</Text>
                <Text>(+64) 980 129 66</Text>
                <Text>(+64) 358 809 98 (After 7pm only)</Text>
                <Text>(+64) 204 083 2971 (WhatsApp only)</Text>
                <Box my="10px">
                    <Divider />
                </Box>
                <Text>admin@cosmoremit.com.au</Text>
            </Box>

            <Box maxW={"300px"}>
                <Flex bg={"#fff"} p="10px" justify={"center"} gap={5} align={"center"} borderRadius={"8px"}  mb="20px">
                   <Image src={internet}  h={"30px"}/>
                    <Text color={"#000"} fontWeight={"medium"}>Our social media </Text>
                </Flex>
                <Text maxW={"300px"} textAlign={"center"}>Follow up our socials to stay up to date on
                the latest news about CosmoRemit.</Text>
                <Flex align={"center"} justify={"space-between"} mt="30px">
                    <Image src={facebook} h={"40px"}/>
                    <Image src={twitte}  h={"40px"}/>
                    <Image src={linked}  h={"40px"}/>
                    <Image src={tube}  h={"40px"}/>
                </Flex>
                
            </Box>


        </Flex>
        <Divider />
        <Flex justify={"center"} gap={"50px"} mt="20px" flexWrap={"wrap"}>
            <Text>2025 @Cosmoremit</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms & Conditions</Text>
            <Text>Powered by BucketCodes</Text>

        </Flex>
    </Box>
  )
}

export default Footer