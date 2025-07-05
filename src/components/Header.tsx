import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

// Fonction utilitaire pour scroll smooth avec offset pour le header fixe
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const headerHeight = 80; // Hauteur approximative du header (64px + padding)
    const elementPosition = el.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
        <div className="flex justify-between items-center h-16 px-6">
          {/* Left side - Logo, Company Name and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-3 bg-transparent border-none outline-none cursor-pointer"
              >
                <img 
                  src="/favicon.png" 
                  alt="Blinq" 
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Garet, sans-serif' }}>
                  Blinq.
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium bg-transparent border-none outline-none cursor-pointer"
                onClick={() => scrollToSection('nos-projets')}
              >
                Projets
              </button>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium bg-transparent border-none outline-none cursor-pointer"
                onClick={() => scrollToSection('notre-offre')}
              >
                Offre
              </button>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium bg-transparent border-none outline-none cursor-pointer"
                onClick={() => scrollToSection('methode')}
              >
                Notre méthode
              </button>
              <button
                type="button"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium bg-transparent border-none outline-none cursor-pointer"
                onClick={() => scrollToSection('faq')}
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* Right side - CTA Button */}
          <div className="hidden md:block">
            <a 
              href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Prendre un Rendez-vous
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-6 pt-2 pb-4 space-y-1">
              <button
                type="button"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium bg-transparent border-none outline-none w-full text-left"
                onClick={() => {
                  scrollToSection('nos-projets');
                  setIsMenuOpen(false);
                }}
              >
                Projets
              </button>
              <button
                type="button"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium bg-transparent border-none outline-none w-full text-left"
                onClick={() => {
                  scrollToSection('notre-offre');
                  setIsMenuOpen(false);
                }}
              >
                Offre
              </button>
              <button
                type="button"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium bg-transparent border-none outline-none w-full text-left"
                onClick={() => {
                  scrollToSection('methode');
                  setIsMenuOpen(false);
                }}
              >
                Notre méthode
              </button>
              <button
                type="button"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors font-medium bg-transparent border-none outline-none w-full text-left"
                onClick={() => {
                  scrollToSection('faq');
                  setIsMenuOpen(false);
                }}
              >
                FAQ
              </button>
              <a 
                href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gray-900 text-white px-6 py-3 rounded-full text-center font-medium mt-4"
              >
                Prendre un Rendez-vous
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;