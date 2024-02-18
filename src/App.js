import {Routes, Route } from "react-router-dom"
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App