import React from 'react';
import { Mail, Linkedin, Twitter, Phone, MapPin, MessageCircle } from 'lucide-react';

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

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Blinq Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/favicon.png" 
                alt="Blinq" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-white font-garet">
                Blinq.
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Nous transformons vos idées en expériences digitales exceptionnelles.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:paul@blinq.agency" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/33781726954" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://www.linkedin.com/company/blinqagency/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors text-left"
                onClick={() => scrollToSection('methode')}
              >
                Notre méthode
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors text-left"
                onClick={() => scrollToSection('notre-offre')}
              >
                Offre
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors text-left"
                onClick={() => scrollToSection('nos-projets')}
              >
                Projets
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-white transition-colors text-left"
                onClick={() => scrollToSection('faq')}
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>pro.lukasiewicz@gmail.com</span>
              </div>
              <a href="https://wa.me/33781726954" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={16} />
                <span>+33 7 81 72 69 54</span>
              </a>
 
            </div>
            <a 
              href="https://cal.com/paul-lukasiewicz/20min?overlayCalendar=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Prendre un Rendez-vous
            </a>
          </div>
        </div>
      

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Blinq. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;