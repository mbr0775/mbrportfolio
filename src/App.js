import React from 'react';
import Navigation from './navbar/Navigation';
import './App.css';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Services from './Common/Services/Services';
import Pricing from './Common/PackPricing/Pricing';
import Hiring from './Common/HiringDashboard/Hiring';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blog from './Pages/Blog/Blog';
import ContactForm from './Pages/Contact/ContactForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="background-container" id="home">
        <div className="content">
          <h1>Hello, I am Mubassir Nasar.</h1>
          <p>Front end Designer | Developer | DevOps Engineer</p>
          <h2>A Web Designer / Developer Located In Our Lovely Earth</h2>
        </div>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="hiring">
        <Hiring />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <ContactForm />
      </section>

  


      
    </div>
  );
}

export default App;
