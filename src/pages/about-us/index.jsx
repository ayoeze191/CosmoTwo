import { Box, Image, Text } from "@chakra-ui/react"
import Navigation from "../../components/Nav"
import AboutHerobg from "./../../assets/abouthero.webp"
import userFriendly from "./../../assets/AboutUs/userfriendly.webp"
const About = () => {
    return (
        <Box>
            <Box p={["20px", "30px", "40px", "50px"]}>
                <Box border={'solid 0.3px #FF0000'} borderRadius={'100px'}>
                    <Navigation />
                </Box>
            </Box>
            <Box
                position={'relative'}
                height={['300px', '400px', '500px', '600px']}
                m={['3rem 0 0 0', '4rem 0 0 0', '5rem 0 0 0']}
            >
                <Box
                    bgColor={'#01010180'}
                    zIndex={-10}
                    height={'100%'}
                    top={0}
                    left={0}
                    position={'absolute'}
                    w={'100%'}
                >
                    <Image src={AboutHerobg} alt="" h={'100%'} w={'100%'} objectFit="cover" />
                </Box>
                <Box
                    p={['50px 0', '100px 0', '150px 0']}
                    zIndex={9999}
                    top={0}
                    left={0}
                    textAlign="center"
                >
                    <Text
                        color={'#FEFEFE'}
                        fontWeight={400}
                        fontSize={['1.5em', '2em', '3em', '4em']}
                    >
                        About Us
                    </Text>
                </Box>
            </Box>
            <Box
                display={'flex'}
                flexDirection={['column', 'column', 'row']}
                gap={['20px', '50px', '100px']}
                p={['20px', '30px', '40px']}
                maxWidth={1191}
                margin={['50px auto','100px auto']}
            >
                <Box flex={1}>
                    <Text
                        textAlign={'center'}
                        color={'#000000'}
                        fontWeight={'bold'}
                        lineHeight={'150%'}
                        fontSize={['1.2rem', '1.5rem', '2rem']}
                    >
                        Fast, secure, affordable international transfers from anywhere.
                    </Text>
                </Box>
                <Box flex={1}>
                    <Text textAlign={'center'} fontSize={['0.9rem', '1rem', '1.2rem']}>
                        At CosmoRemit, we make international money transfers fast, secure, and
                        affordable. Based in Australia, we are committed to providing a seamless and
                        hassle-free remittance experience for individuals and businesses. Whether
                        you're sending money to support family, pay for services, or manage global
                        transactions, our platform ensures your funds reach their destination quickly
                        and safely.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default About





const Benefit = ({image, title, description}) => {
    return (
        <Box padding={20} background={'#F6F6F6'} borderRadius={10}>
<Box>
<Image src={image} alt=""/>
</Box>
<Box display={'flex'} flexDirection={'column'} gap={'20px'} marginTop={50}>
<Text>
    {title}
</Text>
<Text>{description}</Text>
</Box>
        </Box>
    )
}