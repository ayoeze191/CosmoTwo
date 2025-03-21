
import { Box } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./pages/landing/Index"
import Footer from './components/Footer'
import FAQ from "./pages/faq/Index"
import HelpCenter from "./pages/helpcenter/Index"

function App() {

  return (
    <Box>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Landing />} />
        <Route path="/faq" element ={<FAQ />} />
        <Route path="/help-center" element ={<HelpCenter />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </Box>
  )
}

export default App
