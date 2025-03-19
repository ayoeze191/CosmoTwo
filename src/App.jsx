
import { Box } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./pages/landing/Index"

function App() {

  return (
    <Box>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Landing />} />
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
