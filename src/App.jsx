// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Details from './components/Details'; // Import the Details component

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
