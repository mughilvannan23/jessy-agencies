import React from 'react';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import TrustFeatures from './components/TrustFeatures';
import About from './components/About';
import Services from './components/Services';
import WhyJessy from './components/WhyJessy';
import Journey from './components/Journey';
import Stats from './components/Stats';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';
import ServiceLinks from './components/ServiceLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <CustomNavbar />
      <main>
        <Hero />
        <TrustFeatures />
        <About />
        <Services />
        <WhyJessy />
        <Journey />
        <Stats />
        <Process />
        <CTA />
        <ServiceLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
