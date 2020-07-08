import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import AboutPage from './Components/AboutPage';
import MenuPage from './Components/MenuPage';
import ContactPage from './Components/ContactPage';

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutPage />
      <MenuPage />
      <ContactPage />
    </div>
  );
}

export default App;
