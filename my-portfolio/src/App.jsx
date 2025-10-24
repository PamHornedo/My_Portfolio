// App.jsx example structure
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navigation from '../src/components/Layout/Navigation'
import Home from '../src/pages/Home'
import Portfolio from '../src/pages/Portfolio'
import Contact from '../src/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}