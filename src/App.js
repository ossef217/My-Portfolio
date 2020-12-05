import React from 'react';
import './App.css';
import './JS'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Services from './components/Services';
import Project from './components/Project';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <nav className="nav bd-grid">
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>

          <div>
            <a href="/#" rel="noopener noreferrer" className="nav__logo"><i className='bx bx-phone'> 646-379-3176</i></a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>

            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
              <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
              <li className="nav__item"><a href="#works" className="nav__link">Works</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>

          </div>

        </nav>
      </header>

      <Home />
      <About />
      <Skills />
      <Education />
      <Services />
      <Project />
      <Works />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
