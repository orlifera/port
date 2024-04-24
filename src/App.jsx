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
import Kanban from './pages/Kanban';

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
        <Route path="/About" element={ <About /> } />
        <Route path="/Projects" element={ <Projects /> } />
        <Route path="/Contact" element={ <Contact /> } />
        <Route path="/Details/:id" element={ <Details /> } /> {/* Route for Details */ }
        <Route path="/Todo" element={ <Kanban /> } />
      </Routes>
      { windowWidth > 768 ? <Footer /> : null }

    </>
  );
}

export default App;
