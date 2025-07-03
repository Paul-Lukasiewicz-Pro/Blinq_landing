import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NosProjets from './components/NosProjets';
import Methode from './components/Methode';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7f7f7' }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <Hero />
        <NosProjets />
        <Methode />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;