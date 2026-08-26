import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import TrustFeatures from './components/TrustFeatures';
import About from './components/About';
import Services from './components/Services';
import Franchise from './components/Franchise';
import WhyJessy from './components/WhyJessy';
import Journey from './components/Journey';
import Stats from './components/Stats';
import Process from './components/Process';
import CTA from './components/CTA';
import Contact from './components/Contact';
import ServiceLinks from './components/ServiceLinks';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <TrustFeatures />
      <About />
      <Services />
      <WhyJessy />
      <Journey />
      <Stats />
      <Process />
      <CTA />
      <Franchise />
      <ServiceLinks />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <CustomNavbar />

        <main>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;