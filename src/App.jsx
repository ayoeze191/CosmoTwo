
import { Box } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./pages/landing/Index"
import About from './pages/about-us'

function App() {

  return (
    <Box>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Landing />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
