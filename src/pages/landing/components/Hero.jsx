import { Box, Flex, Image, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Navigation from "../../../components/Nav";
import Bg from "../../../assets/homeBg.png";
import { CustomButton } from "../../../components/CustomButton";
import shield from "../../../assets/shield.png"
import aud from "../../../assets/aud.png"
import naija from "../../../assets/naija.png"
import uk from "../../../assets/uk.png"
import usa from "../../../assets/usa.png"
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  const [sendAmount, setSendAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [sendCurrency, setSendCurrency] = useState("AUD");
  const [receiveCurrency, setReceiveCurrency] = useState("NGN");

  const exchangeRates = {
    AUD: { NGN: 250, USD: 0.65, EUR: 0.6, GBP: 0.55 }, 
    USD: { NGN: 750, AUD: 1.54, EUR: 0.9, GBP: 0.8 }, 
    EUR: { NGN: 900, AUD: 1.66, USD: 1.11, GBP: 0.88 },
    GBP: { NGN: 1000, AUD: 1.82, USD: 1.25, EUR: 1.13 }, 
    NGN: { AUD: 0.004, USD: 0.0013, EUR: 0.0011, GBP: 0.001 },
  };
  const handleSendAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    setSendAmount(amount);

    const conversionRate = exchangeRates[sendCurrency]?.[receiveCurrency] || 1;
    setConvertedAmount(amount * conversionRate);
  };
  const handleSendCurrencyChange = (e) => {
    const selectedSendCurrency = e.target.value;
    setSendCurrency(selectedSendCurrency);

    const conversionRate = exchangeRates[selectedSendCurrency]?.[receiveCurrency] || 1;
    setConvertedAmount(sendAmount * conversionRate);
  };
  const handleReceiveCurrencyChange = (e) => {
    const selectedReceiveCurrency = e.target.value;
    setReceiveCurrency(selectedReceiveCurrency);

    const conversionRate = exchangeRates[sendCurrency]?.[selectedReceiveCurrency] || 1;
    setConvertedAmount(sendAmount * conversionRate);
  };
  const getCurrencyFlag = (currency) => {
    switch (currency) {
      case 'AUD':
        return aud; 
      case 'USD':
        return usa; 
      case 'EUR':
        return uk; 
      case 'GBP':
        return uk; 
      default:
        return aud; 
    }
  };
  const recieveCurrencyFlag = (currency) => {
    switch (currency) {
      case 'NGN':
        return naija; 
      case 'AUD':
        return aud; 
      case 'USD':
        return usa;
      case 'EUR':
        return uk; 
      case 'GBP':
        return uk; 
      default:
        return naija; 
    }
  };

  return (
    <Box
      p={["20px 20px", "20px 20px", "20px 20px", "30px 150px"]}
      bgImage={Bg}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      
    >
      <Navigation />

      <Flex mt={["50px","50px","50px","100px"]} justify={"center"} gap={"50px"} align={["start","start","start","center"]} flexDir={["column","column","column","row"]}>
        <Box color={"#fff"}>
          <Flex justify={["center","center","center","start"]}>

          
          <CustomButton
           leftIcon={<Image src={shield} />}
            btnText={"Regulated by AUSTRAC"}
            bg={"none"}
            border={"1px solid white"}
            borderRadius={"50px"}
          /></Flex>
          <Text fontSize={["40px","40px","40px","50px"]} fontWeight={"bold"} maxW={["","","","500px"]} pt="30px" textAlign={["center","center","center","start"]}>
            Send Money Seamlessly Across Borders
          </Text>
          <Text fontWeight={"medium"} py="20px"  maxW={["","","","500px"]} textAlign={["center","center","center","start"]}>
            Our industry-leading technology protects your money andguarantees
            it arrives safely everytime
          </Text>
          <Flex justify={["center","center","center","start"]}>
            <CustomButton btnText={"Sign-in to get started"} borderRadius={"50px"} px={"30px"} rightIcon={<GoArrowUpRight />}/>
          </Flex>
        </Box>

        <Box p={"20px"} margin={["0px auto","0px auto","0px auto","0px"]} bg={"#fff"} borderRadius={"10px"} flex={0.6} boxShadow="0 4px 30px rgba(255, 255, 255, 0.9)">
            <Text textAlign={"center"} color={"#FF0000"}>Best rate guarantee | <span style={{fontWeight:"bold"}}>New customer rate-980 NGN</span></Text>
            <Flex justify={"center"}>
                <Text bg={"#FFE6E6"} px={"10px"} color={"#FF0000"} borderRadius={"50px"}><span style={{fontWeight:"500"}}>Rate</span> - 1 AUD = 985 NGN</Text>
            </Flex>

            <Flex borderRadius={"50px"} border={"1px solid #656565"} p={"15px"}  align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text>You send</Text>
                    <Input 
                    fontWeight="bold"
                    variant='unstyled' 
                    placeholder='0.00' 
                    value={sendAmount}
                    onChange={handleSendAmountChange}
                    type="number" 
                    />
                </Box>
                <Box border={"1px solid #656565"} borderRadius={"50px"} px="30px">
                  <Flex align="center" >
                  <Image src={getCurrencyFlag(sendCurrency)} alt="currency flag" boxSize="20px" mr="10px" />
                <Select 
                value={sendCurrency} 
                onChange={handleSendCurrencyChange} 
                variant="Unstyled" 
                iconColor="red.500" 
                 >
            <option value="AUD"><Image src={shield} />AUD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Select></Flex>
                </Box>
            </Flex>
            <Flex fontSize={"14px"} align={"center"} justify={"space-between"} my="20px">
                <Text >Fee</Text>
                <Text color={"#FF0000"} fontWeight={"bold"}>3 {sendCurrency}</Text>
            </Flex>

            <Flex borderRadius={"50px"} border={"1px solid #656565"} p={"15px"}  align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text>Beneficiary receive</Text>
                    {/* <Text fontWeight={"medium"}>0.00</Text> */}              
          <Text fontWeight={"bold"}>{convertedAmount.toFixed(2)==="NaN"?"0": convertedAmount.toFixed(2)} {receiveCurrency}</Text>
                </Box>
                <Box border={"1px solid #656565"} borderRadius={"50px"} px="30px">
                <Flex align="center">
                <Image src={recieveCurrencyFlag(receiveCurrency)} alt="currency flag" boxSize="20px" mr="10px" />
                <Select value={receiveCurrency} onChange={handleReceiveCurrencyChange} variant="Unstyled"  iconColor="red.500" >
            <option value="NGN">NGN</option>
            <option value="AUD">AUD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Select></Flex>
                </Box>
            </Flex>
            <Flex borderRadius={"50px"} border={"1px solid #656565"} p={"15px"} align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text fontWeight={"medium"}>Payment Method</Text>
                    <Text >select a pament method</Text>
                </Box>
                <Box >
                <Select variant="Unstyled"  iconColor="red.500" >
           
          </Select>
                </Box>
                
            </Flex>

            <Flex my="20px" justify={"center"}>
                <CustomButton btnText={"send money"} w={"full"} borderRadius={"50px"} rightIcon=""/>
            </Flex>

        </Box>

      </Flex>
    </Box>
  );
};

export default Hero;
