import {Routes, Route } from "react-router-dom"
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />  
      <Projects />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App