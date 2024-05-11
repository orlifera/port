import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Router from "./pages/router";

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
    <BrowserRouter>

      { windowWidth > 768 ? null : <Header /> } {/* Render Navbar if window width is greater than 768 */ }
      <Navbar />

      <Router />

      { windowWidth > 768 ? <Footer /> : null }

    </BrowserRouter>
  );
}

export default App;
