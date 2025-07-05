import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NosProjets from './components/NosProjets';
import NotreOffre from './components/NotreOffre';
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
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="nos-projets" className="min-h-screen">
          <NosProjets />
        </section>
        <section id="notre-offre" className="min-h-screen">
          <NotreOffre />
        </section>
        <section id="methode" className="min-h-screen">
          <Methode />
        </section>
        <section id="cta" className="min-h-screen">
          <CTA />
        </section>
        <section id="faq" className="min-h-screen">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;