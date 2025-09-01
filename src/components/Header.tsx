import React from 'react';
import { Phone } from 'lucide-react';

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
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-4 lg:px-8 font-garet">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md shadow-lg border border-gray-100 rounded-full">
                  <div className="flex justify-between items-center h-12 sm:h-14 px-3 sm:px-5">
          {/* Left side - Logo, Company Name and Navigation */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2 sm:space-x-3 bg-transparent border-none outline-none cursor-pointer"
              >
                <img 
                  src="/favicon.png" 
                  alt="Blinq" 
                  className="h-6 sm:h-8 w-auto"
                />
                <span className="text-xl sm:text-2xl font-bold text-gray-900">
                  Blinq.
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
             
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
                onClick={() => scrollToSection('notre-offre')}
              >
                Offre
              </button>
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
                onClick={() => scrollToSection('faq')}
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* Right side - WhatsApp + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://cal.com/paul-blinq/30min?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Prendre un Rendez-vous
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </a>
            <a 
              href="https://wa.me/33781726954" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-transform hover:scale-105"
            >
              <span className="pulse-container">
                <span className="pulse-ring"></span>
                <span className="pulse-ring delay-1"></span>
                <span className="pulse-ring delay-2"></span>
                <span className="inline-flex items-center justify-center rounded-full bg-[#25D366] p-2 shadow-sm">
                  <Phone size={18} className="text-white" />
                </span>
              </span>
            </a>
          </div>

          {/* Mobile CTAs (left of burger) */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://wa.me/33781726954"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-transform hover:scale-105 p-2"
            >
              <span className="pulse-container">
                <span className="pulse-ring"></span>
                <span className="pulse-ring delay-1"></span>
                <span className="pulse-ring delay-2"></span>
                <span className="inline-flex items-center justify-center rounded-full bg-[#25D366] p-2 shadow-sm">
                  <Phone size={18} className="text-white" />
                </span>
              </span>
            </a>
            <a
              href="https://cal.com/paul-blinq/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prendre un rendez-vous"
              className="inline-flex items-center justify-center rounded-full bg-black text-white px-2.5 py-1.5 text-xs font-medium shadow-sm transition-transform hover:scale-105"
            >
              Prendre un RDV
            </a>
          </div>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 rounded-b-2xl bg-white/95 w-full shadow-xl">
            <div className="px-4 py-4 space-y-2">
              <button
                type="button"
                className="block w-full px-4 py-3 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium bg-transparent border-none outline-none rounded-lg"
                onClick={() => {
                  scrollToSection('nos-projets');
                  setIsMenuOpen(false);
                }}
              >
                Projets
              </button>
              <button
                type="button"
                className="block w-full px-4 py-3 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium bg-transparent border-none outline-none rounded-lg"
                onClick={() => {
                  scrollToSection('notre-offre');
                  setIsMenuOpen(false);
                }}
              >
                Offre
              </button>
              <button
                type="button"
                className="block w-full px-4 py-3 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium bg-transparent border-none outline-none rounded-lg"
                onClick={() => {
                  scrollToSection('methode');
                  setIsMenuOpen(false);
                }}
              >
                Notre méthode
              </button>
              <button
                type="button"
                className="block w-full px-4 py-3 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium bg-transparent border-none outline-none rounded-lg"
                onClick={() => {
                  scrollToSection('faq');
                  setIsMenuOpen(false);
                }}
              >
                FAQ
              </button>
              <div className="pt-2">
                <a 
                  href="https://cal.com/paul-blinq/30min?overlayCalendar=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-center font-medium hover:shadow-lg transition-all duration-300"
                >
                  Prendre un Rendez-vous
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;