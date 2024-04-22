import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Details from './pages/Details'; // Import the Details component
import Header from './components/Header';
import ToDo from './pages/ToDo';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run only on mount

  return (
    <>

      { windowWidth > 768 ? null : <Header /> } {/* Render Navbar if window width is greater than 768 */ }
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/details/:id" element={ <Details /> } /> {/* Route for Details */ }
        <Route path="/todo" element={ <ToDo /> } />
      </Routes>
      { windowWidth > 768 ? <Footer /> : null }

    </>
  );
}

export default App;
