import React from 'react';
import Header from './Header';
import Services from './Services';
import Contact from './Contact';
import Specialities from './Specialities';
import './App.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Contact />
      <Specialities />
    </div>
  );
}

export default Home;
