import React from 'react'
import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Numbers from './components/Numbers'
import Platform from './components/Platform'
import Banner from './components/Banner'
import International from './components/International'
import Country from './components/Country'
import Countries from './components/Countries'
import OurApp from './components/OurApp'
import Familiar from './components/Familiar'

const Index = () => {
  return (
    <Box>
        <Hero />
        <Numbers/>
        <Platform />
        <Banner />
        <International />
        <Countries />
        <Country />
        <OurApp />
        <Familiar />
    </Box>
  )
}

export default Index