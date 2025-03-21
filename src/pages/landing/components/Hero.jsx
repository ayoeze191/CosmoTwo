import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Navigation from "../../../components/Nav";
import Bg from "../../../assets/homeBg.png";
import { CustomButton } from "../../../components/CustomButton";

const Hero = () => {
  const [sendAmount, setSendAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [sendCurrency, setSendCurrency] = useState("AUD");
  const [receiveCurrency, setReceiveCurrency] = useState("NGN");

  const exchangeRates = {
    AUD: { NGN: 250, USD: 0.65, EUR: 0.6, GBP: 0.55 }, // AUD to other currencies
    USD: { NGN: 750, AUD: 1.54, EUR: 0.9, GBP: 0.8 }, // USD to other currencies
    EUR: { NGN: 900, AUD: 1.66, USD: 1.11, GBP: 0.88 }, // EUR to other currencies
    GBP: { NGN: 1000, AUD: 1.82, USD: 1.25, EUR: 1.13 }, // GBP to other currencies
    NGN: { AUD: 0.004, USD: 0.0013, EUR: 0.0011, GBP: 0.001 }, // NGN to other currencies
  };
  const handleSendAmountChange = (e) => {
    const amount = parseFloat(e.target.value);
    setSendAmount(amount);

    // Convert the send amount using the selected send and receive currencies
    const conversionRate = exchangeRates[sendCurrency]?.[receiveCurrency] || 1;
    setConvertedAmount(amount * conversionRate);
  };
  const handleSendCurrencyChange = (e) => {
    const selectedSendCurrency = e.target.value;
    setSendCurrency(selectedSendCurrency);

    // Recalculate the converted amount when the send currency changes
    const conversionRate = exchangeRates[selectedSendCurrency]?.[receiveCurrency] || 1;
    setConvertedAmount(sendAmount * conversionRate);
  };
  const handleReceiveCurrencyChange = (e) => {
    const selectedReceiveCurrency = e.target.value;
    setReceiveCurrency(selectedReceiveCurrency);

    // Recalculate the converted amount when the receive currency changes
    const conversionRate = exchangeRates[sendCurrency]?.[selectedReceiveCurrency] || 1;
    setConvertedAmount(sendAmount * conversionRate);
  };

  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bgImage={Bg}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      h={"700px"}
    >
      <Navigation />

      <Flex mt="100px"justify={"center"} gap={"50px"}>
        <Box color={"#fff"}>
          <CustomButton
            btnText={"Regulated by AUSTRAC"}
            bg={"none"}
            border={"1px solid white"}
            borderRadius={"50px"}
          />
          <Text fontSize={"50px"} fontWeight={"bold"} maxW={"500px"} pt="30px">
            Send Money Seamlessly Across Borders
          </Text>
          <Text fontWeight={"medium"} py="20px" maxW={"500px"}>
            Our industry-leading technology protects your money and guarantees
            it arrives safely everytime
          </Text>
          <Flex>
            <CustomButton btnText={"Sign-in to get started"} borderRadius={"50px"} px={"30px"}/>
          </Flex>
        </Box>

        <Box p={"20px"} bg={"#fff"} borderRadius={"10px"} flex={0.6}>
            <Text textAlign={"center"} color={"#FF0000"}>Best rate guarantee | <span style={{fontWeight:"500"}}>New customer rate-980 NGN</span></Text>
            <Flex justify={"center"}>
                <Text bg={"#FFE6E6"} px={"10px"} color={"#FF0000"} borderRadius={"50px"}><span style={{fontWeight:"500"}}>Rate</span> - 1 AUD = 985 NGN</Text>
            </Flex>

            <Flex borderRadius={"50px"} border={"1px solid #eee"} px={"15px"} align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text>You send</Text>
                    <Input 
                    variant='unstyled' 
                    placeholder='0.00' 
                    value={sendAmount}
                    onChange={handleSendAmountChange}
                    type="number" // Ensure only numbers are entered
                    />
                </Box>
                <Box border={"1px solid #eee"} borderRadius={"50px"}>
                <Select value={sendCurrency} onChange={handleSendCurrencyChange}>
            <option value="AUD">AUD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Select>
                </Box>
            </Flex>
            <Flex fontSize={"14px"} align={"center"} justify={"space-between"} my="20px">
                <Text >Fee</Text>
                <Text color={"#FF0000"} fontWeight={"bold"}>3 {sendCurrency}</Text>
            </Flex>

            <Flex borderRadius={"50px"} border={"1px solid #eee"} px={"15px"} align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text>Beneficiary receive</Text>
                    {/* <Text fontWeight={"medium"}>0.00</Text> */}              
          <Text fontWeight={"medium"}>{convertedAmount.toFixed(2)==="NaN"?"0": convertedAmount.toFixed(2)} {receiveCurrency}</Text>
                </Box>
                <Box border={"1px solid #eee"} borderRadius={"50px"}>
                <Select value={receiveCurrency} onChange={handleReceiveCurrencyChange}>
            <option value="NGN">NGN</option>
            <option value="AUD">AUD</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </Select>
                </Box>
            </Flex>
            <Flex borderRadius={"50px"} border={"1px solid #eee"} px={"15px"} align={"center"} justify={"space-between"} mt="30px">
                <Box>
                    <Text fontWeight={"medium"}>Payment Method</Text>
                    <Text >select a pament method</Text>
                </Box>
                <Box border={"1px solid #eee"} borderRadius={"50px"}>
                    
                </Box>
            </Flex>

            <Flex my="20px" justify={"center"}>
                <CustomButton btnText={"send money"} w={"full"} borderRadius={"50px"}/>
            </Flex>

        </Box>

      </Flex>
    </Box>
  );
};

export default Hero;
