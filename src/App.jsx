
import { Box } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./pages/landing/Index"
import About from './pages/about-us'
import ContactUs from './pages/contact-us/index'

function App() {

  return (
    <Box>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Landing />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
