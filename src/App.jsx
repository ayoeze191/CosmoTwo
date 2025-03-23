
import { Box } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./pages/landing/Index"
import Footer from './components/Footer'
import FAQ from "./pages/faq/Index"
import HelpCenter from "./pages/helpcenter/Index"
import About from './pages/about-us'
import ContactUs from './pages/contact-us/index'

function App() {

  return (
    <Box  fontFamily="Bricolage Grotesque, sans-serif">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Landing />} />
        <Route path="/faq" element ={<FAQ />} />
        <Route path="/help-center" element ={<HelpCenter />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </Box>
  )
}

export default App
