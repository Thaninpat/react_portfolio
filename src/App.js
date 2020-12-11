import React from 'react';
import './App.css';
import Header from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Prices from './components/Prices';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Services />
      <About />
      <Prices />
      <Contact />
    </>
  );
}

export default App;
