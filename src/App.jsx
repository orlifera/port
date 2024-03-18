import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Details from './pages/Details'; // Import the Details component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/skills" element={ <Skills /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/details/:id" element={ <Details /> } /> {/* Route for Details */ }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
