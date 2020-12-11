import React from 'react';
import './App.css';
import Header from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Services />
      <About />
    </div>
  );
}

export default App;
