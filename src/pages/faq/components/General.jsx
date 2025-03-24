import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import { faqs } from '../DummyData'
import { FiPlus } from "react-icons/fi";

const General = () => {
  return (
   <Box w={"full"}>
          {faqs.map((faq, index) => (
            <Accordion w={["100%","100%","100%","50%"]} m={"0px auto"} key={index} allowMultiple>
              <AccordionItem
                bg={"#F1F9F8"}
                rounded={"lg"}
                p={"5px"}
                mb={"25px"}
                border={"1.2px solid #D6D5D5"}
              >
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color={"#1A0031"}
                      fontSize={"1rem"}
                      fontWeight={"semibold"}
                      py={"7px"}
                    >
                      {faq.question}
                    </Box>
                    <FiPlus />
                  </AccordionButton>
                <AccordionPanel pb={4} fontSize={"15px"}>
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
       
   </Box>
  )
}

export default General