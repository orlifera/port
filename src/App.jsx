import React, { useState } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/About" element={ <About /> } />
        <Route path="/Projects" element={ <Projects /> } />
        <Route path="/Skills" element={ <Skills /> } />
        <Route path="/Contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
