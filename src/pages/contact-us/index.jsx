import { Box, Button, Image, Input, Text, Textarea } from "@chakra-ui/react";
import Navigation from "../../components/Nav";
import AboutHerobg from "./../../assets/Contact/Contactherobg.png";
import requestIcon from "./../../assets/Contact/requestIcon.svg";
import { BiLocationPlus } from "react-icons/bi";
import { BsGlobe2, BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

const ContactUs = () => {
  return (
    <Box>
      <Box p={["10px", "20px", "30px", "5vw"]}>
        <Box border={"solid 0.3px #FF0000"} borderRadius={"100px"}>
          <Navigation />
        </Box>
      </Box>

      <Box
        position={"relative"}
        height={["200px", "300px", "400px", "25vw"]}
        m={["2rem 0 0 0", "3rem 0 0 0", "4rem 0 0 0"]}
      >
        <Box
          bgColor={"#01010180"}
          zIndex={-10}
          height={"100%"}
          top={0}
          left={0}
          position={"absolute"}
          w={"100%"}
        >
          <Image
            src={AboutHerobg}
            alt=""
            h={"100%"}
            w={"100%"}
            objectFit="cover"
          />
        </Box>
        <Box
          padding={["30px 0", "50px 0", "100px 0"]}
          zIndex={9999}
          top={0}
          left={0}
          textAlign="center"
        >
          <Text
            color={"#FEFEFE"}
            fontWeight={400}
            fontSize={["1.2em", "1.8em", "2.5em", "3.5em"]}
          >
            Contact Us
          </Text>
        </Box>
      </Box>
      <Text
        fontSize={["1em", "1.1em"]}
        lineHeight={"150%"}
        maxW={"1064px"}
        m={["50px auto", "100px auto"]}
        textAlign={"center"}
        px={["10px", "20px"]}
      >
        We're here to help! Whether you have questions about your transactions,
        need assistance with our services, or just want to learn more about{" "}
        <span style={{ color: "#FF0000", fontWeight: "bold" }}>CosmoRemit</span>
        , our team is ready to assist you.
      </Text>

      <Box
        display={"flex"}
        flexDirection={["column", "column", "row"]}
        gap={["50px", "25px", "25px", "100px"]}
        margin={"0 auto"}
        width={["100%", "100%", "fit-content"]}
        px={["10px", "20px"]}
        // background={"red.100"}
      >
        <Box>
          <Box
            background={"#FFE6E6"}
            width={"fit-content"}
            display={"flex"}
            gap={"11px"}
            padding={"10px"}
            borderRadius={"5px"}
            alignItems={"center"}
            margin={["0 auto", "0 auto", "0 0"]}
          >
            <Box>
              <BiLocationPlus color={"#FF0000"} size={"24px"} />
            </Box>
            <Text fontSize={["1em", "1.56em"]} fontWeight={700}>
              Australia Contact Info
            </Text>
          </Box>
          <Box>
            <Text
              color={"#656565"}
              fontSize={["0.9em", "1.1em"]}
              padding={"30px 0 20px 0 "}
              borderBottom={"0.3px solid #656565"}
            >
              Address: Floor 14 153 MacQuarie
              <br /> Street City: PARRAMATTA
              <br /> Postcode: 2150
              <br /> Country: Australia
            </Text>
            <Text
              color={"#656565"}
              fontSize={["0.9em", "1.1em"]}
              padding={"30px 0 20px 0 "}
              borderBottom={"0.3px solid #656565"}
            >
              SWIFT Code: CSPYAU22
              <br /> Bank: CosmoRemit PTY LTD
            </Text>
            <Text
              color={"#656565"}
              fontSize={["0.9em", "1.1em"]}
              padding={"30px 0 20px 0 "}
              borderBottom={"0.3px solid #656565"}
            >
              (02) 96 159 832
              <br /> (+61) 414 151 549
              <br /> (+61) 470 628 369
            </Text>
            <Text
              color={"#656565"}
              fontSize={["0.9em", "1.1em"]}
              padding={"30px 0 20px 0 "}
            >
              admin@cosmoremit.com.au
            </Text>
          </Box>
        </Box>

        <Box>
          <Box
            background={"#FFE6E6"}
            width={"fit-content"}
            display={"flex"}
            gap={"11px"}
            padding={"10px"}
            borderRadius={"5px"}
            alignItems={"center"}
            margin={["0 auto", "0 auto", "0 0"]}
          >
            <Box>
              <BiLocationPlus color={"#FF0000"} size={"24px"} />
            </Box>
            <Text fontSize={["1em", "1.56em"]} fontWeight={700}>
              New Zealand Contact Info
            </Text>
          </Box>
          <Box>
            <Text
              color={"#656565"}
              fontSize={["0.9em", "1.1em"]}
              padding={"30px 0 20px 0 "}
              borderBottom={"0.3px solid #656565"}
            >
              New Zealand Contact Info
              <br /> City: Dunedin Central
              <br /> Postcode: 9016
              <br /> Country: New Zealand
            </Text>

            <Text
              color={"#656565"}
              fontSize={["0.9em", "1.1em"]}
              padding={"30px 0 20px 0 "}
              borderBottom={"0.3px solid #656565"}
            >
              (+64) 448 812 66
              <br /> (+64) 980 129 66
              <br /> (+64) 358 809 98 (After 7pm only)
              <br />
              (+64) 204 083 2971 (WhatsApp only)
            </Text>
            <Text
              color={"#656565"}
              fontSize={["0.9em", "1.1em"]}
              padding={"30px 0 20px 0 "}
            >
              admin@cosmoremit.com.au
            </Text>
          </Box>
        </Box>

        <Box>
          <Box
            background={"#FFE6E6"}
            width={["fit-content", "fit-content", "100%"]}
            display={"flex"}
            gap={"11px"}
            padding={"10px"}
            justifyContent={"center"}
            borderRadius={"5px"}
            alignItems={"center"}
            margin={["0 auto", "0 auto", "0 0"]}
          >
            <Box>
              <BsGlobe2 color={"#FF0000"} size={"24px"} />
            </Box>
            <Text fontSize={["1em", "1.56em"]} fontWeight={700}>
              Our social media
            </Text>
          </Box>
          <Box>
            <Text
              color={"#000000"}
              fontSize={["0.9em", "1.1em"]}
              padding={"30px 0 20px 0 "}
              borderBottom={"0.3px solid #656565"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Follow up our socials to stay up to date
              <br /> on the latest news about CosmoRemit.
            </Text>
          </Box>
          <Box
            display={"flex"}
            gap={["20px", "40px"]}
            marginTop={"30px"}
            justifyContent={"center"}
          >
            <Box padding={"10px"} background={"#E8F1E6"} borderRadius={"5px"}>
              <FaFacebook color="#197500" />
            </Box>
            <Box padding={"10px"} background={"#E8F1E6"} borderRadius={"5px"}>
              <BsTwitterX color="#001EFF" />
            </Box>
            <Box padding={"10px"} background={"#E8F1E6"} borderRadius={"5px"}>
              <RiLinkedinLine color="#001EFF" />
            </Box>
            <Box padding={"10px"} background={"#E8F1E6"} borderRadius={"5px"}>
              <BsInstagram color="#FF0000" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        background={"#F6F6F6"}
        p={["20px", "50px", "50px"]}
        maxWidth={"700px"}
        margin={["50px auto", "100px auto"]}
        borderRadius={"10px"}
        width={("80%", "80%", "100%")}
      >
        <Box
          display={"flex"}
          gap={"20px"}
          alignItems={"center"}
          background={"#FFE6E6"}
          padding={"14px 0"}
          justifyContent={"center"}
          borderRadius={"10px"}
        >
          <Box>
            <Image src={requestIcon} alt="" />
          </Box>
          <Text fontSize={["1em", "1.2em"]}>Request Form</Text>
        </Box>
        <Text
          color={"#000000"}
          margin={"30px auto"}
          textAlign={"center"}
          fontSize={["0.9em", "18px"]}
        >
          Need assistance? Submit a request and our customer service team will
          respond within 24 hours, ready to help
        </Text>
        <Box
          width={"100%"}
          borderRadius={"10px"}
          border={"solid #656565 0.5px"}
          padding={"11.5px 0"}
        >
          <Input
            placeholder="Full name"
            width={"100%"}
            borderRadius={"10px"}
            border={0}
          />
        </Box>

        <Box
          margin={"40px 0"}
          width={"100%"}
          borderRadius={"10px"}
          border={"solid #656565 0.5px"}
          padding={"11.5px 0"}
        >
          <Input
            placeholder="Email Address"
            width={"100%"}
            borderRadius={"10px"}
            border={0}
          />
        </Box>

        <Box
          margin={"40px 0"}
          width={"100%"}
          borderRadius={"10px"}
          border={"solid #656565 0.5px"}
          padding={"11.5px 0"}
        >
          <Textarea placeholder="Message" color={"#656565"} border={0} />
        </Box>
        <Button
          background={"#FF0000"}
          color={"#FEFEFE"}
          padding={"30px 0"}
          width={"100%"}
          borderRadius={"10px"}
        >
          Submit request
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;

// const Location = ({ loc, color }) => {
//   return (

//   );
// };
