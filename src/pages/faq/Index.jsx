import { Box } from '@chakra-ui/react'
import React from 'react'
import First from './components/First'
import Hero from './components/Hero'
import Questions from './components/Questions'

const Index = () => {
  return (
    <Box>
        <First />
        <Hero />
        <Questions />
    </Box>
  )
}

export default Index