import React from 'react'
import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Numbers from './components/Numbers'
import Platform from './components/Platform'

const Index = () => {
  return (
    <Box>
        <Hero />
        <Numbers/>
        <Platform />
    </Box>
  )
}

export default Index